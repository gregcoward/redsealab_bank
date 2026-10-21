document.addEventListener('DOMContentLoaded', () => {
    // Demo User Database
    const USERS_DB = {
        'jane.doe@redsealabbank.com': {
            email: 'jane.doe@redsealabbank.com',
            password: 'password123',
            name: 'Jane Doe',
            avatar: 'JD',
            status: 'Premium Tier',
            isAdmin: false,
            checkingNum: '•••• 4829',
            checkingBalance: 24150.25,
            savingsNum: '•••• 9102',
            savingsBalance: 104300.55,
            referralCode: 'JD-8902'
        },
        'alex.smith@redsealabbank.com': {
            email: 'alex.smith@redsealabbank.com',
            password: 'admin123',
            name: 'Alex Smith',
            avatar: 'AS',
            status: 'Standard Tier',
            isAdmin: false,
            checkingNum: '•••• 1094',
            checkingBalance: 5400.00,
            savingsNum: '•••• 7712',
            savingsBalance: 18250.00,
            referralCode: 'AS-1094'
        },
        'adminuser@redsealabbank.com': {
            email: 'adminuser@redsealabbank.com',
            password: 'F5testnet!',
            name: 'adminuser',
            avatar: 'AD',
            status: 'Administrator',
            isAdmin: true,
            checkingNum: '•••• 0001',
            checkingBalance: 1250000.00,
            savingsNum: '•••• 0002',
            savingsBalance: 5000000.00,
            referralCode: 'ADMIN-001'
        },
        'adminuser': {
            email: 'adminuser@redsealabbank.com',
            password: 'F5testnet!',
            name: 'adminuser',
            avatar: 'AD',
            status: 'Administrator',
            isAdmin: true,
            checkingNum: '•••• 0001',
            checkingBalance: 1250000.00,
            savingsNum: '•••• 0002',
            savingsBalance: 5000000.00,
            referralCode: 'ADMIN-001'
        }
    };

    // Elements
    const loginModal = document.getElementById('login-modal');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const logoutBtn = document.getElementById('logout-btn');

    const navAvatar = document.getElementById('nav-avatar');
    const navUserName = document.getElementById('nav-user-name');
    const navUserStatus = document.getElementById('nav-user-status');

    const portfolioBalanceEl = document.getElementById('portfolio-balance');
    const checkingBalanceEl = document.getElementById('checking-balance');
    const checkingNumEl = document.getElementById('checking-account-num');
    const savingsBalanceEl = document.getElementById('savings-balance');
    const savingsNumEl = document.getElementById('savings-account-num');
    const referralLinkInput = document.getElementById('referral-link');
    const sourceAccountSelect = document.getElementById('source-account');

    // Current Session State
    let currentUser = null;

    // Auth State Initialization
    function checkAuth() {
        const sessionUserEmail = sessionStorage.getItem('redsealab_auth_user');
        if (sessionUserEmail && USERS_DB[sessionUserEmail]) {
            currentUser = USERS_DB[sessionUserEmail];
            renderUserSession(currentUser);
            loginModal.classList.add('hidden');
        } else {
            currentUser = null;
            renderUserSession(null);
            loginModal.classList.remove('hidden');
        }
    }

    // Render User Session UI & Toggle Admin Views
    function renderUserSession(user) {
        const adminElements = document.querySelectorAll('.admin-only');
        if (user && user.isAdmin) {
            adminElements.forEach(el => el.classList.remove('hidden'));
        } else {
            adminElements.forEach(el => el.classList.add('hidden'));
            // If active tab is admin but user is not admin, reset to dashboard
            const activeTab = document.querySelector('.nav-btn.active');
            if (activeTab && activeTab.getAttribute('data-tab') === 'admin') {
                const dashBtn = document.querySelector('.nav-btn[data-tab="dashboard"]');
                if (dashBtn) dashBtn.click();
            }
        }

        if (!user) return;

        if (navAvatar) navAvatar.textContent = user.avatar;
        if (navUserName) navUserName.textContent = user.name;
        if (navUserStatus) navUserStatus.textContent = user.status;

        const totalPortfolio = user.checkingBalance + user.savingsBalance;
        if (portfolioBalanceEl) portfolioBalanceEl.textContent = `$${totalPortfolio.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
        if (checkingBalanceEl) checkingBalanceEl.textContent = `$${user.checkingBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
        if (checkingNumEl) checkingNumEl.textContent = user.checkingNum;
        if (savingsBalanceEl) savingsBalanceEl.textContent = `$${user.savingsBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
        if (savingsNumEl) savingsNumEl.textContent = user.savingsNum;

        if (referralLinkInput) {
            referralLinkInput.value = `https://redsealabbank.apps.openshift.com/invite/${user.referralCode}`;
        }

        if (sourceAccountSelect) {
            sourceAccountSelect.innerHTML = `
                <option value="checking">Checking Account (${user.checkingNum}) - $${user.checkingBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</option>
                <option value="savings">Savings Account (${user.savingsNum}) - $${user.savingsBalance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</option>
            `;
        }

        // Initialize S3 List if admin
        if (user.isAdmin) {
            s3ListDocuments();
        }
    }

    // Handle Login Submit
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('login-email').value.trim().toLowerCase();
            const password = document.getElementById('login-password').value;

            const matchedUser = USERS_DB[emailInput];
            if (matchedUser && matchedUser.password === password) {
                sessionStorage.setItem('redsealab_auth_user', matchedUser.email);
                currentUser = matchedUser;
                loginError.classList.add('hidden');
                renderUserSession(matchedUser);
                loginModal.classList.add('hidden');
            } else {
                loginError.classList.remove('hidden');
            }
        });
    }

    // Quick Login Chips Autofill
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            const email = chip.getAttribute('data-email');
            const pass = chip.getAttribute('data-pass');
            document.getElementById('login-email').value = email;
            document.getElementById('login-password').value = pass;
        });
    });

    // Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('redsealab_auth_user');
            currentUser = null;
            renderUserSession(null);
            loginModal.classList.remove('hidden');
        });
    }

    // Check Auth on load
    checkAuth();

    // Navigation Tab Switching
    const navButtons = document.querySelectorAll('.nav-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Protect admin tab
            if (targetTab === 'admin' && (!currentUser || !currentUser.isAdmin)) {
                alert('Access restricted to site administrators.');
                return;
            }

            navButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(tab => tab.classList.remove('active'));

            button.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            if (targetTab === 'admin') {
                s3ListDocuments();
            }
        });
    });

    // Money Transfer Form Handling
    const transferForm = document.getElementById('transfer-form');
    const transferAlert = document.getElementById('transfer-alert');
    const transactionsBody = document.getElementById('transactions-body');

    if (transferForm) {
        transferForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const recipient = document.getElementById('recipient-name').value;
            const amount = parseFloat(document.getElementById('transfer-amount').value).toFixed(2);
            const note = document.getElementById('transfer-note').value || 'Transfer';

            transferAlert.className = 'alert success';
            transferAlert.textContent = `Success! Transferred $${amount} to ${recipient}. Processing via /api/v1/transfer.`;
            transferAlert.classList.remove('hidden');

            if (transactionsBody) {
                const newRow = document.createElement('tr');
                const today = new Date().toISOString().split('T')[0];
                newRow.innerHTML = `
                    <td>${today}</td>
                    <td>To: ${recipient} (${note})</td>
                    <td>Transfer</td>
                    <td><code>/api/v1/transfer</code></td>
                    <td class="amount negative">-$${amount}</td>
                    <td><span class="status-pill status-completed">Completed</span></td>
                `;
                transactionsBody.insertBefore(newRow, transactionsBody.firstChild);
            }

            transferForm.reset();

            setTimeout(() => {
                transferAlert.classList.add('hidden');
            }, 5000);
        });
    }

    // Referral Form Handling
    const referralForm = document.getElementById('referral-email-form');
    const referralAlert = document.getElementById('referral-alert');

    if (referralForm) {
        referralForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('friend-email').value;

            referralAlert.className = 'alert success';
            referralAlert.textContent = `Invitation successfully dispatched to ${email} via /app3/referral!`;
            referralAlert.classList.remove('hidden');

            referralForm.reset();

            setTimeout(() => {
                referralAlert.classList.add('hidden');
            }, 5000);
        });
    }

    // Copy Referral Link
    const copyBtn = document.getElementById('copy-link-btn');

    if (copyBtn && referralLinkInput) {
        copyBtn.addEventListener('click', () => {
            referralLinkInput.select();
            navigator.clipboard.writeText(referralLinkInput.value).then(() => {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            }).catch(() => {
                copyBtn.textContent = 'Copied!';
            });
        });
    }

    // Refresh Transactions Button
    const refreshBtn = document.getElementById('refresh-txs');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            refreshBtn.textContent = 'Refreshing...';
            setTimeout(() => {
                refreshBtn.textContent = 'Refresh';
            }, 600);
        });
    }

    // ==========================================
    // MINIO AISTORE S3 ADMIN PORTAL FUNCTIONS
    // ==========================================

    let s3LocalCache = [
        { key: 'compliance/compliance_framework_2026.pdf', contentType: 'application/pdf', size: 1048576, lastModified: new Date().toISOString() },
        { key: 'rag_docs/bank_faq_kb.txt', contentType: 'text/plain', size: 24576, lastModified: new Date().toISOString() },
        { key: 'statements/january_2026_ledger.csv', contentType: 'text/csv', size: 512000, lastModified: new Date().toISOString() }
    ];

    const s3FileInput = document.getElementById('s3-file-input');
    const s3ObjectKey = document.getElementById('s3-object-key');
    const s3UploadForm = document.getElementById('s3-upload-form');
    const s3UploadAlert = document.getElementById('s3-upload-alert');
    const s3RefreshBtn = document.getElementById('s3-refresh-btn');
    const s3DocsBody = document.getElementById('s3-documents-body');
    const s3DocCount = document.getElementById('s3-doc-count');
    const s3StatusBadge = document.getElementById('s3-status-badge');

    if (s3FileInput && s3ObjectKey) {
        s3FileInput.addEventListener('change', () => {
            if (s3FileInput.files && s3FileInput.files[0]) {
                s3ObjectKey.value = s3FileInput.files[0].name;
            }
        });
    }

    if (s3RefreshBtn) {
        s3RefreshBtn.addEventListener('click', () => {
            s3ListDocuments();
        });
    }

    // Fetch / List S3 Documents (GET)
    async function s3ListDocuments() {
        if (!s3DocsBody) return;

        const endpoint = document.getElementById('s3-endpoint') ? document.getElementById('s3-endpoint').value.trim() : '/s3';
        const bucket = document.getElementById('s3-bucket') ? document.getElementById('s3-bucket').value.trim() : 'bank-documents';
        const currentBucketLabel = document.getElementById('current-bucket-label');
        if (currentBucketLabel) currentBucketLabel.textContent = bucket;

        const url = `${endpoint.replace(/\/$/, '')}/${bucket}`;

        try {
            const res = await fetch(url, { method: 'GET' });
            if (res.ok) {
                const xmlText = await res.text();
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
                const contents = xmlDoc.getElementsByTagName('Contents');

                const fetchedDocs = [];
                for (let i = 0; i < contents.length; i++) {
                    const key = contents[i].getElementsByTagName('Key')[0]?.textContent || '';
                    const size = parseInt(contents[i].getElementsByTagName('Size')[0]?.textContent || '0', 10);
                    const lastModified = contents[i].getElementsByTagName('LastModified')[0]?.textContent || '';
                    fetchedDocs.push({ key, size, lastModified, contentType: getContentTypeFromKey(key) });
                }

                if (fetchedDocs.length > 0) {
                    s3LocalCache = fetchedDocs;
                }

                if (s3StatusBadge) {
                    s3StatusBadge.className = 'badge badge-success';
                    s3StatusBadge.textContent = 'MinIO S3 Connected';
                }
            } else {
                throw new Error(`HTTP ${res.status}`);
            }
        } catch (err) {
            console.warn('MinIO S3 live fetch fallback to local cache:', err);
            if (s3StatusBadge) {
                s3StatusBadge.className = 'badge badge-warning';
                s3StatusBadge.textContent = 'S3 Proxy Standby / Ready';
            }
        }

        renderS3DocumentsTable(s3LocalCache);
    }

    function renderS3DocumentsTable(docs) {
        if (!s3DocsBody) return;
        s3DocsBody.innerHTML = '';

        if (s3DocCount) s3DocCount.textContent = docs.length;

        if (docs.length === 0) {
            s3DocsBody.innerHTML = `
                <tr>
                    <td colspan="5" class="text-muted text-center" style="padding: 2rem;">
                        No documents found in bucket. Upload a file above using POST/PUT.
                    </td>
                </tr>
            `;
            return;
        }

        docs.forEach(doc => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <div style="font-weight: 600; color: var(--text-primary);">${escapeHtml(doc.key)}</div>
                </td>
                <td><code>${escapeHtml(doc.contentType || 'application/octet-stream')}</code></td>
                <td>${formatBytes(doc.size)}</td>
                <td>${doc.lastModified ? new Date(doc.lastModified).toLocaleString() : 'N/A'}</td>
                <td class="text-right">
                    <button class="btn btn-outline btn-sm s3-dl-btn" data-key="${escapeHtml(doc.key)}" title="GET Document">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        GET
                    </button>
                    <button class="btn btn-danger btn-sm s3-del-btn" data-key="${escapeHtml(doc.key)}" title="DELETE Document">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                        DELETE
                    </button>
                </td>
            `;
            s3DocsBody.appendChild(tr);
        });

        // Add Listeners for GET / DELETE buttons
        document.querySelectorAll('.s3-dl-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-key');
                s3DownloadDocument(key);
            });
        });

        document.querySelectorAll('.s3-del-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const key = btn.getAttribute('data-key');
                s3DeleteDocument(key);
            });
        });
    }

    // Upload Document (POST / PUT)
    if (s3UploadForm) {
        s3UploadForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const file = s3FileInput.files[0];
            const objectKey = s3ObjectKey.value.trim();
            const contentType = document.getElementById('s3-content-type').value;
            const endpoint = document.getElementById('s3-endpoint') ? document.getElementById('s3-endpoint').value.trim() : '/s3';
            const bucket = document.getElementById('s3-bucket') ? document.getElementById('s3-bucket').value.trim() : 'bank-documents';

            if (!file || !objectKey) {
                showS3Alert('Please select a file and provide an object key.', 'error');
                return;
            }

            const targetUrl = `${endpoint.replace(/\/$/, '')}/${bucket}/${encodeURIComponent(objectKey)}`;

            try {
                const res = await fetch(targetUrl, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': contentType
                    },
                    body: file
                });

                if (res.ok || res.status === 200 || res.status === 201 || res.status === 204) {
                    showS3Alert(`Successfully uploaded "${objectKey}" to MinIO AIStore bucket "${bucket}"!`, 'success');
                } else {
                    throw new Error(`Server returned HTTP ${res.status}`);
                }
            } catch (err) {
                console.warn('Live S3 upload failed, updating local state cache:', err);
                showS3Alert(`Uploaded "${objectKey}" (${formatBytes(file.size)}) to bucket "${bucket}" (MinIO AIStore HTTP PUT/POST target: ${targetUrl})`, 'success');
            }

            // Update local cache
            const existingIdx = s3LocalCache.findIndex(d => d.key === objectKey);
            const newDoc = {
                key: objectKey,
                contentType: contentType,
                size: file.size,
                lastModified: new Date().toISOString()
            };
            if (existingIdx >= 0) {
                s3LocalCache[existingIdx] = newDoc;
            } else {
                s3LocalCache.unshift(newDoc);
            }

            renderS3DocumentsTable(s3LocalCache);
            s3UploadForm.reset();
        });
    }

    // Download Document (GET)
    function s3DownloadDocument(key) {
        const endpoint = document.getElementById('s3-endpoint') ? document.getElementById('s3-endpoint').value.trim() : '/s3';
        const bucket = document.getElementById('s3-bucket') ? document.getElementById('s3-bucket').value.trim() : 'bank-documents';
        const downloadUrl = `${endpoint.replace(/\/$/, '')}/${bucket}/${encodeURIComponent(key)}`;

        window.open(downloadUrl, '_blank');
        showS3Alert(`Initiated GET download request for "${key}" from ${downloadUrl}`, 'success');
    }

    // Delete Document (DELETE)
    async function s3DeleteDocument(key) {
        if (!confirm(`Are you sure you want to HTTP DELETE object "${key}" from MinIO AIStore bucket?`)) {
            return;
        }

        const endpoint = document.getElementById('s3-endpoint') ? document.getElementById('s3-endpoint').value.trim() : '/s3';
        const bucket = document.getElementById('s3-bucket') ? document.getElementById('s3-bucket').value.trim() : 'bank-documents';
        const deleteUrl = `${endpoint.replace(/\/$/, '')}/${bucket}/${encodeURIComponent(key)}`;

        try {
            const res = await fetch(deleteUrl, { method: 'DELETE' });
            if (res.ok || res.status === 204 || res.status === 200) {
                showS3Alert(`HTTP DELETE successful for object "${key}"`, 'success');
            } else {
                throw new Error(`HTTP ${res.status}`);
            }
        } catch (err) {
            console.warn('Live S3 delete failed, updating local state cache:', err);
            showS3Alert(`Deleted object "${key}" from bucket "${bucket}" (HTTP DELETE: ${deleteUrl})`, 'success');
        }

        s3LocalCache = s3LocalCache.filter(d => d.key !== key);
        renderS3DocumentsTable(s3LocalCache);
    }

    function showS3Alert(msg, type) {
        if (!s3UploadAlert) return;
        s3UploadAlert.className = `alert ${type}`;
        s3UploadAlert.textContent = msg;
        s3UploadAlert.classList.remove('hidden');

        setTimeout(() => {
            s3UploadAlert.classList.add('hidden');
        }, 6000);
    }

    function getContentTypeFromKey(key) {
        if (key.endsWith('.pdf')) return 'application/pdf';
        if (key.endsWith('.txt')) return 'text/plain';
        if (key.endsWith('.json')) return 'application/json';
        if (key.endsWith('.csv')) return 'text/csv';
        if (key.endsWith('.png')) return 'image/png';
        return 'application/octet-stream';
    }

    function formatBytes(bytes) {
        if (!bytes || bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    function escapeHtml(str) {
        return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
});
