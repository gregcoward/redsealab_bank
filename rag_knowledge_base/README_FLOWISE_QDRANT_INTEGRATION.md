# Flowise & Qdrant Integration Guide for Red Sea Lab Bank RAG

This directory contains official RAG (Retrieval-Augmented Generation) knowledge base assets formatted for seamless ingestion into **Flowise AI** and the **Qdrant Vector Database**.

---

## 📐 Qdrant Vector Dimension Reference

The Qdrant collection **vector dimension size** must match the **Embedding Model** configured in Flowise:

| Embedding Provider | Model Name | Qdrant Vector Dimension | Recommended Distance Metric |
| :--- | :--- | :---: | :---: |
| **OpenAI** (Recommended) | `text-embedding-3-small` | **1536** | Cosine |
| **OpenAI** | `text-embedding-3-large` | **3072** | Cosine |
| **OpenAI** (Legacy) | `text-embedding-ada-002` | **1536** | Cosine |
| **Ollama / Local** | `nomic-embed-text` | **768** | Cosine |
| **Ollama / Local** | `mxbai-embed-large` | **1024** | Cosine |
| **HuggingFace / BGE** | `BAAI/bge-small-en-v1.5` | **384** | Cosine |
| **HuggingFace / BGE** | `BAAI/bge-base-en-v1.5` | **768** | Cosine |
| **HuggingFace / BGE** | `BAAI/bge-large-en-v1.5` | **1024** | Cosine |
| **Google Vertex / Gemini** | `text-embedding-004` | **768** | Cosine |
| **Cohere** | `embed-english-v3.0` | **1024** | Cosine |

> **Note**: If you let Flowise auto-create the Qdrant collection during the "Upsert" step, Flowise sets the dimension automatically based on the connected Embeddings node.

---

## 📁 Complete Knowledge Base Documents Inventory

### 1. General Banking Policies & Products
| Document | Format | Description |
| :--- | :--- | :--- |
| `01_account_products_and_rates.txt` | TXT | Checking/savings account tiers, APY interest rates, monthly fees, minimum balances. |
| `02_transfers_and_digital_banking.txt` | TXT | Wire transfers (`/api/v1/transfer`), ACH limits, mobile app security, MFA requirements. |
| `03_referral_program_and_promotions.txt` | TXT | Refer-a-Friend promotion terms, $50 cash bonus rules, referral links (`/app3/referral`). |
| `04_technical_architecture_and_faqs.txt` | TXT | OpenShift non-root deployment architecture, microservices breakdown, technical FAQs. |
| `redsea_lab_bank_knowledge_base_full.txt` | TXT | **Master Combined Document** aggregating all 4 banking sections above into a single file. |

### 2. Branch Locations Directory (Western United States)
| Document / Directory | Format | Description | Ingestion Mode |
| :--- | :--- | :--- | :--- |
| `individual_branch_pdfs/` | 14 PDFs | **Individual Branch PDFs** (1 separate PDF file per branch location). | **1 File = 1 Chunk** (Disconnect Text Splitter) |
| `individual_branch_txt/` | 14 TXTs | **Individual Branch TXTs** (1 separate TXT file per branch location). | **1 File = 1 Chunk** (Disconnect Text Splitter) |
| `redsea_bank_western_us_branches.pdf` | PDF | **14-Page Combined Directory PDF** (Seattle WA, Portland OR, SF CA, LA CA, SD CA, Phoenix AZ, Vegas NV, SLC UT, Denver CO, Boise ID, Reno NV, Spokane WA, Anchorage AK, Honolulu HI). | Multi-Chunk (Text Splitter Chunk Size `1000`) |
| `redsea_bank_western_us_branches.txt` | TXT | **Combined Directory Text File** formatted with explicit `=====` separators. | Multi-Chunk (Custom Separators) |

### 3. Customer Transaction Receipts & Audit Records
| Document / Directory | Format | Description | Ingestion Mode |
| :--- | :--- | :--- | :--- |
| `individual_receipts_pdf/` | 50 PDFs | Individual audit transaction receipts in PDF format. | **1 File = 1 Chunk** (Disconnect Text Splitter) |
| `individual_user_receipts_pdf/` | 100 PDFs | Individual user transaction receipts across customer accounts. | **1 File = 1 Chunk** (Disconnect Text Splitter) |
| `individual_user_receipts_txt/` | 100 TXTs | Individual user transaction receipts in plain text format. | **1 File = 1 Chunk** (Disconnect Text Splitter) |
| `sample_transaction_receipts_50.pdf` | PDF | Combined document containing 50 audit receipts. | Multi-Chunk |
| `user_transactions_100.pdf` | PDF | Combined document containing 100 customer receipts. | Multi-Chunk |

---

## 🚀 How to Ingest Documents into Flowise & Qdrant

### Ingestion Approach A: 1 Document = 1 Chunk (Recommended for Individual Branch & Receipt Files)

When uploading individual branch files (`individual_branch_pdfs/` or `individual_branch_txt/`) or receipt files, you want **each file to stay 100% intact** in a single vector so addresses, phone numbers, hours, and manager info are never fragmented.

1. **Flowise Canvas Configuration**:
   * Add a **Folder Loader** or **File Loader** node (e.g., set path to `rag_knowledge_base/individual_branch_pdfs/`).
   * **DO NOT CONNECT A TEXT SPLITTER NODE!** Leave the `Text Splitter` input on the Document Loader **unconnected / empty**.
   * Connect an **Embeddings** node (e.g. OpenAI `text-embedding-3-small`).
   * Connect to **Qdrant Vector Store** (`Collection Name`: `redsea_lab_bank_kb`).
2. **Upsert to Qdrant**:
   * Click **Upsert Vector Database** in the top-right corner of Flowise.
   * Flowise will load each file as **1 complete unsplit Document object** and generate exactly 1 vector embedding per branch / receipt.

---

### Ingestion Approach B: Chunked Multi-Document Ingestion (For Combined Files)

When uploading combined multi-page documents like `redsea_bank_western_us_branches.txt` or `redsea_lab_bank_knowledge_base_full.txt`:

1. **Flowise Canvas Configuration**:
   * Add a **File Loader** node and select your combined document.
   * Connect a **Recursive Character Text Splitter** node to the Document Loader's `Text Splitter` input.
2. **Text Splitter Settings**:
   * **Chunk Size**: `1000` (or `800`)
   * **Chunk Overlap**: `100` (or `150`)
   * **Custom Separators**: Use explicit section dividers if available:
     ```json
     ["================================================================================", "--------------------------------------------------------------------------------", "\n\n", "\n", " "]
     ```
3. **Upsert to Qdrant**:
   * Click **Upsert Vector Database** to generate vector embeddings.

---

## 🧪 Testing Chatbot Queries

Once upserted into Qdrant, verify RAG retrieval by asking your Flowise chatbot queries:

### Branch Location Queries
* *"Where is the Red Sea Lab Bank branch in Seattle, and what are the lobby hours?"*
* *"Give me the phone number and manager name for the San Francisco flagship branch."*
* *"Does the Phoenix Biltmore branch have drive-thru banking?"*
* *"Which branch handles Asia-Pacific trade and Japanese multi-currency services?"*

### Banking Policy & Product Queries
* *"What is the APY interest rate on Premium Tier savings?"*
* *"How does the $50 Refer-a-Friend promotion work?"*
* *"What is the daily transfer limit for digital banking?"*

The chatbot retrieves exact vector matches from Qdrant and delivers grounded, accurate answers!
