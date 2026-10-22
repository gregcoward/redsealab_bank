// Global S3 Toggle Config function accessible anywhere with debounce guard
let lastS3ToggleTime = 0;
window.toggleS3Config = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();

    const now = Date.now();
    if (now - lastS3ToggleTime < 250) return; // Prevent double trigger from inline onclick + addEventListener
    lastS3ToggleTime = now;

    const container = document.getElementById('s3-config-fields-container');
    const btn = document.getElementById('s3-toggle-config-btn');
    if (!container) return;

    const isHidden = container.classList.contains('hidden') || window.getComputedStyle(container).display === 'none';
    if (isHidden) {
        container.classList.remove('hidden');
        container.style.display = 'block';
        if (btn) {
            btn.innerHTML = `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="pointer-events: none;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                Close Configuration
            `;
        }
    } else {
        container.classList.add('hidden');
        container.style.display = 'none';
        if (btn) {
            btn.innerHTML = `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="pointer-events: none;"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                Configure
            `;
        }
    }
};

// Global Guardrails Toggle Config function
let lastGuardrailsToggleTime = 0;
window.toggleGuardrailsConfig = function(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();

    const now = Date.now();
    if (now - lastGuardrailsToggleTime < 250) return;
    lastGuardrailsToggleTime = now;

    const container = document.getElementById('guardrails-config-fields-container');
    const btn = document.getElementById('guardrails-toggle-config-btn');
    if (!container) return;

    const isHidden = container.classList.contains('hidden') || window.getComputedStyle(container).display === 'none';
    if (isHidden) {
        container.classList.remove('hidden');
        container.style.display = 'block';
        if (btn) {
            btn.innerHTML = `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="pointer-events: none;"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                Close Configuration
            `;
        }
    } else {
        container.classList.add('hidden');
        container.style.display = 'none';
        if (btn) {
            btn.innerHTML = `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="pointer-events: none;"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                Configure
            `;
        }
    }
};

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

        // Load S3 settings & list documents if admin
        if (user.isAdmin) {
            loadS3ConfigFromStorage();
            loadGuardrailsConfigFromStorage();
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
    // AWS SIGV4 AUTHENTICATION HELPERS
    // ==========================================

    async function computeSha256Hex(data) {
        const encoder = new TextEncoder();
        let buffer;
        if (typeof data === 'string') {
            buffer = encoder.encode(data);
        } else if (data instanceof ArrayBuffer) {
            buffer = data;
        } else if (data && data.arrayBuffer) {
            buffer = await data.arrayBuffer();
        } else {
            buffer = encoder.encode('');
        }
        const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
        return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
    }

    async function hmacSha256(key, message) {
        const encoder = new TextEncoder();
        const keyData = typeof key === 'string' ? encoder.encode(key) : key;
        const msgData = typeof message === 'string' ? encoder.encode(message) : message;

        const cryptoKey = await crypto.subtle.importKey(
            'raw', keyData, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
        );
        return await crypto.subtle.sign('HMAC', cryptoKey, msgData);
    }

    async function getSignatureKey(secretKey, dateStamp, regionName, serviceName) {
        const kDate = await hmacSha256('AWS4' + secretKey, dateStamp);
        const kRegion = await hmacSha256(kDate, regionName);
        const kService = await hmacSha256(kRegion, serviceName);
        const kSigning = await hmacSha256(kService, 'aws4_request');
        return kSigning;
    }

    async function getAwsSigV4Headers({ method, path, headers = {}, payload = '', accessKey, secretKey, hostHeader, region = 'us-east-1', service = 's3' }) {
        if (!accessKey || !secretKey) return headers;

        const now = new Date();
        const amzDate = now.toISOString().replace(/[:-]/g, '').split('.')[0] + 'Z';
        const dateStamp = amzDate.substring(0, 8);

        // For PUT file uploads, use UNSIGNED-PAYLOAD (standard S3 browser upload practice)
        let payloadHash = 'UNSIGNED-PAYLOAD';
        if (typeof payload === 'string') {
            payloadHash = await computeSha256Hex(payload);
        } else if (method.toUpperCase() === 'GET' || method.toUpperCase() === 'DELETE') {
            payloadHash = await computeSha256Hex('');
        }

        // Standard SigV4 headers to sign for S3 requests
        const reqHeaders = {
            'host': hostHeader.toLowerCase(),
            'x-amz-content-sha256': payloadHash,
            'x-amz-date': amzDate
        };

        const sortedHeaderKeys = Object.keys(reqHeaders).sort();
        const canonicalHeaders = sortedHeaderKeys.map(k => `${k}:${reqHeaders[k].trim()}\n`).join('');
        const signedHeaders = sortedHeaderKeys.join(';');

        const canonicalUri = path.startsWith('/') ? path : '/' + path;
        const canonicalQueryString = '';

        const canonicalRequest = [
            method.toUpperCase(),
            canonicalUri,
            canonicalQueryString,
            canonicalHeaders,
            signedHeaders,
            payloadHash
        ].join('\n');

        const canonicalRequestHash = await computeSha256Hex(canonicalRequest);

        const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
        const stringToSign = [
            'AWS4-HMAC-SHA256',
            amzDate,
            credentialScope,
            canonicalRequestHash
        ].join('\n');

        const signingKey = await getSignatureKey(secretKey, dateStamp, region, service);
        const signatureBuffer = await hmacSha256(signingKey, stringToSign);
        const signatureHex = Array.from(new Uint8Array(signatureBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');

        const authHeader = `AWS4-HMAC-SHA256 Credential=${accessKey}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signatureHex}`;

        // Return combined headers including proxy headers & Authorization
        return {
            ...headers,
            ...reqHeaders,
            'Authorization': authHeader
        };
    }

    // ==========================================
    // MINIO AISTORE S3 CONNECTIVITY CONFIG
    // ==========================================

    let s3LocalCache = [
        { key: '01_account_products_and_rates.txt', contentType: 'text/plain', size: 3269, lastModified: new Date().toISOString() },
        { key: '02_transfers_and_digital_banking.txt', contentType: 'text/plain', size: 3020, lastModified: new Date().toISOString() },
        { key: '03_referral_program_and_promotions.txt', contentType: 'text/plain', size: 2389, lastModified: new Date().toISOString() },
        { key: '04_technical_architecture_and_faqs.txt', contentType: 'text/plain', size: 3368, lastModified: new Date().toISOString() },
        { key: 'arcadia-team-with-sensitve-data-v3_1-nric.txt', contentType: 'text/plain', size: 1888, lastModified: new Date().toISOString() },
        { key: 'redsea_lab_bank_knowledge_base_full.txt', contentType: 'text/plain', size: 12046, lastModified: new Date().toISOString() }
    ];

    const s3ConfigForm = document.getElementById('s3-config-form');
    const s3ConfigAlert = document.getElementById('s3-config-alert');
    const s3FileInput = document.getElementById('s3-file-input');
    const s3ObjectKey = document.getElementById('s3-object-key');
    const s3UploadForm = document.getElementById('s3-upload-form');
    const s3UploadAlert = document.getElementById('s3-upload-alert');
    const s3RefreshBtn = document.getElementById('s3-refresh-btn');
    const s3DocsBody = document.getElementById('s3-documents-body');
    const s3DocCount = document.getElementById('s3-doc-count');
    const s3StatusBadge = document.getElementById('s3-status-badge');
    const s3ToggleConfigBtn = document.getElementById('s3-toggle-config-btn');
    const s3ConfigFieldsContainer = document.getElementById('s3-config-fields-container');

    function getS3Config() {
        let endpointUrl = (document.getElementById('s3-endpoint-url')?.value || 'https://aistor-primary-hl.aistor-primary.svc.cluster.local:9000').trim();
        const port = (document.getElementById('s3-port')?.value || '9000').trim();
        let protocol = (document.getElementById('s3-protocol')?.value || 'https').trim();
        const bucket = (document.getElementById('s3-bucket')?.value || 'redsealab-bank-kb').trim();
        const proxyPath = (document.getElementById('s3-proxy-endpoint')?.value || '/s3').trim();
        const accessKey = (document.getElementById('s3-access-key')?.value || '').trim();
        const secretKey = (document.getElementById('s3-secret-key')?.value || '').trim();

        let rawHost = endpointUrl;
        if (rawHost.startsWith('https://')) {
            protocol = 'https';
            rawHost = rawHost.substring(8);
        } else if (rawHost.startsWith('http://')) {
            protocol = 'http';
            rawHost = rawHost.substring(7);
        }

        // Strip trailing path/slashes
        rawHost = rawHost.replace(/\/.*$/, '');

        let targetHost = rawHost;
        if (!targetHost.includes(':') && port) {
            targetHost = `${targetHost}:${port}`;
        }

        return { endpointUrl, targetHost, protocol, port, bucket, proxyPath, accessKey, secretKey };
    }

    function saveS3ConfigToStorage() {
        const cfg = getS3Config();
        sessionStorage.setItem('aistor_s3_config', JSON.stringify(cfg));
    }

    function loadS3ConfigFromStorage() {
        const saved = sessionStorage.getItem('aistor_s3_config');
        if (!saved) return;
        try {
            const cfg = JSON.parse(saved);
            if (document.getElementById('s3-endpoint-url')) {
                document.getElementById('s3-endpoint-url').value = cfg.endpointUrl || (cfg.targetHost ? `${cfg.protocol || 'https'}://${cfg.targetHost}` : 'https://aistor-primary-hl.aistor-primary.svc.cluster.local:9000');
            }
            if (document.getElementById('s3-port')) document.getElementById('s3-port').value = cfg.port || '9000';
            if (document.getElementById('s3-protocol')) document.getElementById('s3-protocol').value = cfg.protocol || 'https';
            if (document.getElementById('s3-bucket')) document.getElementById('s3-bucket').value = cfg.bucket || 'redsealab-bank-kb';
            if (document.getElementById('s3-proxy-endpoint')) document.getElementById('s3-proxy-endpoint').value = cfg.proxyPath || '/s3';
            if (document.getElementById('s3-access-key')) document.getElementById('s3-access-key').value = cfg.accessKey || '';
            if (document.getElementById('s3-secret-key')) document.getElementById('s3-secret-key').value = cfg.secretKey || '';
        } catch (e) {
            console.warn('Error reading saved S3 config:', e);
        }
    }

    if (s3ToggleConfigBtn) {
        s3ToggleConfigBtn.addEventListener('click', (e) => {
            window.toggleS3Config(e);
        });
    }

    if (s3ConfigForm) {
        s3ConfigForm.addEventListener('submit', (e) => {
            e.preventDefault();
            saveS3ConfigToStorage();
            if (s3ConfigAlert) {
                s3ConfigAlert.className = 'alert success';
                s3ConfigAlert.textContent = 'MinIO AIStore connectivity & access key configuration saved successfully! Re-testing bucket connection...';
                s3ConfigAlert.classList.remove('hidden');
                setTimeout(() => s3ConfigAlert.classList.add('hidden'), 4000);
            }
            s3ListDocuments();
        });
    }

    const s3ContentTypeSelect = document.getElementById('s3-content-type');

    if (s3FileInput && s3ObjectKey) {
        s3FileInput.addEventListener('change', () => {
            if (s3FileInput.files && s3FileInput.files[0]) {
                const file = s3FileInput.files[0];
                s3ObjectKey.value = file.name;
                if (s3ContentTypeSelect) {
                    s3ContentTypeSelect.value = getContentTypeFromKey(file.name, file.type);
                }
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

        const cfg = getS3Config();
        const currentBucketLabel = document.getElementById('current-bucket-label');
        if (currentBucketLabel) currentBucketLabel.textContent = cfg.bucket;

        const proxyUrl = `${cfg.proxyPath.replace(/\/$/, '')}/${cfg.bucket}`;
        const s3Path = `/${cfg.bucket}`;

        const baseHeaders = {
            'X-S3-Target-Host': cfg.targetHost,
            'X-S3-Proto': cfg.protocol
        };

        const reqHeaders = await getAwsSigV4Headers({
            method: 'GET',
            path: s3Path,
            headers: baseHeaders,
            payload: '',
            accessKey: cfg.accessKey,
            secretKey: cfg.secretKey,
            hostHeader: cfg.targetHost
        });

        try {
            const res = await fetch(proxyUrl, { method: 'GET', headers: reqHeaders });
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
                    s3StatusBadge.textContent = `Connected (${cfg.targetHost})`;
                }
            } else {
                throw new Error(`HTTP ${res.status}`);
            }
        } catch (err) {
            console.warn('MinIO S3 live fetch fallback to local cache:', err);
            if (s3StatusBadge) {
                s3StatusBadge.className = 'badge badge-warning';
                s3StatusBadge.textContent = 'S3 Proxy Standby / Local Cache';
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

    // ==========================================
    // F5 AI GUARDRAILS SCAN & TEXT EXTRACTION
    // ==========================================

    const guardrailsConfigForm = document.getElementById('guardrails-config-form');
    const guardrailsConfigAlert = document.getElementById('guardrails-config-alert');
    const guardrailsEnabledCheckbox = document.getElementById('guardrails-enabled');
    const guardrailsStatusBadge = document.getElementById('guardrails-status-badge');
    const guardrailsToggleConfigBtn = document.getElementById('guardrails-toggle-config-btn');

    if (guardrailsToggleConfigBtn) {
        guardrailsToggleConfigBtn.addEventListener('click', (e) => {
            window.toggleGuardrailsConfig(e);
        });
    }

    function getGuardrailsConfig() {
        const enabled = guardrailsEnabledCheckbox ? guardrailsEnabledCheckbox.checked : true;
        let rawEndpoint = (document.getElementById('guardrails-endpoint')?.value || 'http://cai-moderator.cai-moderator.svc.cluster.local:5500').trim();
        const token = (document.getElementById('guardrails-token')?.value || 'MDFhMTYwZWUtNjM4MS03MDM0LWFkNzMtZDMxNmY3NDcyN2Jj/redsealab_bank_api_token_secret_123456789').trim();
        const project = (document.getElementById('guardrails-project')?.value || '01a160ee-5a3d-7010-9d6c-2bba263f77df').trim();
        const scanDirection = (document.getElementById('guardrails-scan-direction')?.value || 'request').trim();
        const proxyPath = (document.getElementById('guardrails-proxy-endpoint')?.value || '/guardrails').trim();

        let proto = 'http';
        let targetHost = rawEndpoint.replace(/^https?:\/\//, '');
        if (rawEndpoint.startsWith('https://')) {
            proto = 'https';
        }

        return { enabled, rawEndpoint, targetHost, proto, token, project, scanDirection, proxyPath };
    }

    function saveGuardrailsConfigToStorage() {
        const cfg = getGuardrailsConfig();
        sessionStorage.setItem('f5_guardrails_config', JSON.stringify(cfg));
    }

    function loadGuardrailsConfigFromStorage() {
        const saved = sessionStorage.getItem('f5_guardrails_config');
        if (!saved) return;
        try {
            const cfg = JSON.parse(saved);
            if (guardrailsEnabledCheckbox) guardrailsEnabledCheckbox.checked = cfg.enabled !== false;
            if (document.getElementById('guardrails-endpoint')) document.getElementById('guardrails-endpoint').value = cfg.rawEndpoint || 'http://cai-moderator.cai-moderator.svc.cluster.local:5500';
            if (document.getElementById('guardrails-token')) document.getElementById('guardrails-token').value = cfg.token || 'MDFhMTYwZWUtNjM4MS03MDM0LWFkNzMtZDMxNmY3NDcyN2Jj/redsealab_bank_api_token_secret_123456789';
            if (document.getElementById('guardrails-project')) document.getElementById('guardrails-project').value = cfg.project || '01a160ee-5a3d-7010-9d6c-2bba263f77df';
            if (document.getElementById('guardrails-scan-direction')) document.getElementById('guardrails-scan-direction').value = cfg.scanDirection || 'request';
            if (document.getElementById('guardrails-proxy-endpoint')) document.getElementById('guardrails-proxy-endpoint').value = cfg.proxyPath || '/guardrails';
        } catch (e) {
            console.warn('Error reading saved Guardrails config:', e);
        }
    }

    if (guardrailsConfigForm) {
        guardrailsConfigForm.addEventListener('submit', (e) => {
            e.preventDefault();
            saveGuardrailsConfigToStorage();
            if (guardrailsConfigAlert) {
                guardrailsConfigAlert.className = 'alert success';
                guardrailsConfigAlert.textContent = 'F5 AI Guardrails security configuration saved successfully!';
                guardrailsConfigAlert.classList.remove('hidden');
                setTimeout(() => guardrailsConfigAlert.classList.add('hidden'), 4000);
            }
        });
    }

    // Client-side Document Text Extraction Engine
    async function extractTextFromDocument(file) {
        const fileName = file.name.toLowerCase();

        // 1. Plain Text / Code / Data formats
        if (fileName.endsWith('.txt') || fileName.endsWith('.json') || fileName.endsWith('.csv') ||
            fileName.endsWith('.md') || fileName.endsWith('.xml') || fileName.endsWith('.html') ||
            fileName.endsWith('.log') || fileName.endsWith('.yaml') || fileName.endsWith('.yml')) {
            return await file.text();
        }

        const buffer = await file.arrayBuffer();

        // 2. OpenXML Word Documents (.docx, .docm, .dotx)
        if (fileName.endsWith('.docx') || fileName.endsWith('.docm') || fileName.endsWith('.dotx')) {
            const extracted = await extractTextFromDocx(buffer);
            if (extracted && extracted.trim().length > 0) {
                return extracted;
            }
        }

        // 3. PDF Documents (.pdf)
        if (fileName.endsWith('.pdf')) {
            const extracted = await extractTextFromPdf(buffer);
            if (extracted && extracted.trim().length > 0) {
                return extracted;
            }
        }

        // 4. OpenXML PowerPoint Documents (.pptx, .pptm, .potx)
        if (fileName.endsWith('.pptx') || fileName.endsWith('.pptm') || fileName.endsWith('.potx')) {
            const extracted = await extractTextFromPptx(buffer);
            if (extracted && extracted.trim().length > 0) {
                return extracted;
            }
        }

        // 5. Binary or spreadsheet documents (.doc, .ppt, .xls, .xlsx)
        return extractPrintableStringsFromArrayBuffer(buffer);
    }

    // Specialized PDF Parser (PDF.js -> Native FlateDecode Stream Unpacker -> Fallback)
    async function extractTextFromPdf(buffer) {
        // 1. Try PDF.js (Mozilla PDF engine) if available
        if (typeof pdfjsLib !== 'undefined') {
            try {
                pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(buffer) });
                const pdf = await loadingTask.promise;
                let pageTexts = [];

                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const textContent = await page.getTextContent();
                    const textItems = textContent.items.map(item => item.str);
                    const pageText = textItems.join(' ').replace(/\s+/g, ' ').trim();
                    if (pageText) {
                        pageTexts.push(pageText);
                    }
                }

                if (pageTexts.length > 0) {
                    console.log(`Successfully extracted PDF text using PDF.js (${pdf.numPages} pages)`);
                    return pageTexts.join('\n\n');
                }
            } catch (err) {
                console.warn('PDF.js extraction warning, trying native stream parser:', err);
            }
        }

        // 2. Try Native PDF FlateDecode Stream Unpacker
        try {
            const nativeText = await extractPdfWithNativeDecompression(buffer);
            if (nativeText && nativeText.trim().length > 0) {
                console.log('Successfully extracted PDF text using native FlateDecode stream unpacker');
                return nativeText.trim();
            }
        } catch (err) {
            console.warn('Native PDF stream extraction warning:', err);
        }

        // 3. Fallback
        return extractPrintableStringsFromArrayBuffer(buffer);
    }

    async function extractPdfWithNativeDecompression(buffer) {
        const bytes = new Uint8Array(buffer);
        const latinStr = new TextDecoder('latin1').decode(bytes);
        let extractedTexts = [];

        // Match stream ... endstream blocks
        const streamRegex = /stream\r?\n([\s\S]*?)\r?\nendstream/g;
        let match;

        while ((match = streamRegex.exec(latinStr)) !== null) {
            const streamStartIndex = match.index + match[0].indexOf('\n') + 1;
            const streamEndIndex = match.index + match[0].lastIndexOf('endstream') - 1;

            if (streamEndIndex > streamStartIndex) {
                const rawStreamBytes = bytes.subarray(streamStartIndex, streamEndIndex);
                let decompressedText = '';

                if (rawStreamBytes.length > 2 && rawStreamBytes[0] === 0x78 && typeof DecompressionStream !== 'undefined') {
                    try {
                        const ds = new DecompressionStream('deflate');
                        const response = new Response(new Blob([rawStreamBytes]).stream().pipeThrough(ds));
                        decompressedText = await response.text();
                    } catch (e) {
                        try {
                            const dsRaw = new DecompressionStream('deflate-raw');
                            const responseRaw = new Response(new Blob([rawStreamBytes.subarray(2)]).stream().pipeThrough(dsRaw));
                            decompressedText = await responseRaw.text();
                        } catch (e2) {
                            decompressedText = new TextDecoder('latin1').decode(rawStreamBytes);
                        }
                    }
                } else {
                    decompressedText = new TextDecoder('latin1').decode(rawStreamBytes);
                }

                if (decompressedText && (decompressedText.includes('BT') || decompressedText.includes('Tj') || decompressedText.includes('TJ'))) {
                    const parsed = parsePdfBtBlocks(decompressedText);
                    if (parsed && parsed.trim().length > 0) {
                        extractedTexts.push(parsed.trim());
                    }
                }
            }
        }

        return extractedTexts.join('\n\n');
    }

    function parsePdfBtBlocks(streamText) {
        let lines = [];
        const btBlocks = streamText.match(/BT[\s\S]*?ET/g) || [streamText];

        for (let block of btBlocks) {
            let blockText = '';

            const stringMatches = block.match(/\(([^)]+)\)\s*(?:Tj|'|")/g) || [];
            for (let m of stringMatches) {
                const str = m.replace(/\)\s*(?:Tj|'|")/, '').replace(/^\(/, '');
                if (str.trim()) {
                    blockText += str + ' ';
                }
            }

            const arrayMatches = block.match(/\[([\s\S]*?)\]\s*TJ/g) || [];
            for (let arr of arrayMatches) {
                const innerStrings = arr.match(/\(([^)]+)\)/g) || [];
                let combined = innerStrings.map(s => s.slice(1, -1)).join('');
                if (combined.trim()) {
                    blockText += combined + ' ';
                }
            }

            if (blockText.trim()) {
                lines.push(blockText.trim());
            }
        }

        return lines.join('\n');
    }

    // Specialized Docx Parser (Mammoth -> JSZip -> Native Browser Decompress -> Fallback)
    async function extractTextFromDocx(buffer) {
        // 1. Try Mammoth.js if available (highest quality raw text extraction)
        if (typeof mammoth !== 'undefined' && mammoth.extractRawText) {
            try {
                const res = await mammoth.extractRawText({ arrayBuffer: buffer });
                if (res && res.value && res.value.trim().length > 0) {
                    console.log('Successfully extracted Word document text using Mammoth.js');
                    return res.value.trim();
                }
            } catch (err) {
                console.warn('Mammoth.js extraction warning, trying JSZip/XML fallback:', err);
            }
        }

        // 2. Try JSZip if available (extract word/document.xml and parse <w:p> / <w:t> tags)
        if (typeof JSZip !== 'undefined') {
            try {
                const zip = await JSZip.loadAsync(buffer);
                const docFile = zip.file('word/document.xml');
                if (docFile) {
                    const xmlText = await docFile.async('text');
                    const parsedText = parseWordDocumentXml(xmlText);
                    if (parsedText && parsedText.trim().length > 0) {
                        console.log('Successfully extracted Word document text using JSZip + XML parser');
                        return parsedText.trim();
                    }
                }
            } catch (err) {
                console.warn('JSZip extraction warning, trying native browser unpacker:', err);
            }
        }

        // 3. Try Native Browser DecompressionStream + Zip Entry Parser
        try {
            const nativeText = await extractDocxWithNativeDecompression(buffer);
            if (nativeText && nativeText.trim().length > 0) {
                console.log('Successfully extracted Word document text using native browser DecompressionStream');
                return nativeText.trim();
            }
        } catch (err) {
            console.warn('Native browser decompression warning:', err);
        }

        // 4. Fallback
        return extractPrintableStringsFromArrayBuffer(buffer);
    }

    function parseWordDocumentXml(xmlText) {
        if (typeof DOMParser !== 'undefined') {
            try {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
                const paragraphs = xmlDoc.getElementsByTagName('w:p');
                let lines = [];
                for (let i = 0; i < paragraphs.length; i++) {
                    const p = paragraphs[i];
                    const textNodes = p.getElementsByTagName('w:t');
                    let lineText = '';
                    for (let j = 0; j < textNodes.length; j++) {
                        lineText += textNodes[j].textContent;
                    }
                    if (lineText.trim()) {
                        lines.push(lineText.trim());
                    }
                }
                if (lines.length > 0) return lines.join('\n');
            } catch (e) {
                console.warn('DOMParser failed on word/document.xml:', e);
            }
        }

        // Fallback regex for <w:p> and <w:t> tags
        const paragraphs = xmlText.match(/<w:p\b[\s\S]*?<\/w:p>/gi) || [xmlText];
        let lines = [];
        for (let pXml of paragraphs) {
            const tMatches = pXml.match(/<w:t\b[^>]*>([\s\S]*?)<\/w:t>/gi) || [];
            let line = tMatches.map(t => t.replace(/<[^>]+>/g, '')).join('');
            if (line.trim()) {
                lines.push(line.trim());
            }
        }
        return lines.join('\n');
    }

    async function extractDocxWithNativeDecompression(buffer) {
        const bytes = new Uint8Array(buffer);
        let offset = 0;

        while (offset < bytes.length - 30) {
            // Local file header signature 0x04034b50 ("PK\x03\x04")
            if (bytes[offset] === 0x50 && bytes[offset + 1] === 0x4b && bytes[offset + 2] === 0x03 && bytes[offset + 3] === 0x04) {
                const compMethod = bytes[offset + 8] | (bytes[offset + 9] << 8);
                const compSize = bytes[offset + 18] | (bytes[offset + 19] << 8) | (bytes[offset + 20] << 16) | (bytes[offset + 21] << 24);
                const fileNameLen = bytes[offset + 26] | (bytes[offset + 27] << 8);
                const extraLen = bytes[offset + 28] | (bytes[offset + 29] << 8);

                let fileName = '';
                for (let i = 0; i < fileNameLen; i++) {
                    fileName += String.fromCharCode(bytes[offset + 30 + i]);
                }

                const dataOffset = offset + 30 + fileNameLen + extraLen;

                if (fileName === 'word/document.xml') {
                    const fileData = bytes.subarray(dataOffset, dataOffset + compSize);
                    let xmlText = '';

                    if (compMethod === 8 && typeof DecompressionStream !== 'undefined') {
                        // DEFLATE compressed stream
                        const ds = new DecompressionStream('deflate-raw');
                        const response = new Response(new Blob([fileData]).stream().pipeThrough(ds));
                        xmlText = await response.text();
                    } else if (compMethod === 0) {
                        // Uncompressed
                        xmlText = new TextDecoder().decode(fileData);
                    }

                    if (xmlText) {
                        return parseWordDocumentXml(xmlText);
                    }
                }

                offset = dataOffset + compSize;
            } else {
                offset++;
            }
        }
        return '';
    }

    // Specialized PPTX Parser (JSZip -> Native Browser Decompress -> Fallback)
    async function extractTextFromPptx(buffer) {
        // 1. Try JSZip if available (extract ppt/slides/slide*.xml and ppt/notesSlides/notesSlide*.xml)
        if (typeof JSZip !== 'undefined') {
            try {
                const zip = await JSZip.loadAsync(buffer);
                const slideKeys = Object.keys(zip.files)
                    .filter(name => /^ppt\/slides\/slide\d+\.xml$/i.test(name))
                    .sort((a, b) => {
                        const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10);
                        const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10);
                        return numA - numB;
                    });

                let extractedSlides = [];
                for (const key of slideKeys) {
                    const slideFile = zip.file(key);
                    if (slideFile) {
                        const xmlText = await slideFile.async('text');
                        const slideText = parsePptxSlideXml(xmlText);
                        if (slideText && slideText.trim()) {
                            extractedSlides.push(slideText.trim());
                        }
                    }
                }

                // Also extract speaker notes if available
                const notesKeys = Object.keys(zip.files)
                    .filter(name => /^ppt\/notesSlides\/notesSlide\d+\.xml$/i.test(name))
                    .sort((a, b) => {
                        const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10);
                        const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10);
                        return numA - numB;
                    });

                for (const key of notesKeys) {
                    const notesFile = zip.file(key);
                    if (notesFile) {
                        const xmlText = await notesFile.async('text');
                        const notesText = parsePptxSlideXml(xmlText);
                        if (notesText && notesText.trim()) {
                            extractedSlides.push(notesText.trim());
                        }
                    }
                }

                if (extractedSlides.length > 0) {
                    console.log(`Successfully extracted PowerPoint document text using JSZip (${slideKeys.length} slides)`);
                    return extractedSlides.join('\n\n');
                }
            } catch (err) {
                console.warn('JSZip PPTX extraction warning, trying native browser unpacker:', err);
            }
        }

        // 2. Try Native Browser DecompressionStream + Zip Entry Parser
        try {
            const nativeText = await extractPptxWithNativeDecompression(buffer);
            if (nativeText && nativeText.trim().length > 0) {
                console.log('Successfully extracted PowerPoint document text using native browser DecompressionStream');
                return nativeText.trim();
            }
        } catch (err) {
            console.warn('Native browser PPTX decompression warning:', err);
        }

        // 3. Fallback
        return extractPrintableStringsFromArrayBuffer(buffer);
    }

    function decodeXmlEntities(str) {
        if (!str) return '';
        return str
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&apos;/g, "'")
            .replace(/&#39;/g, "'")
            .replace(/&amp;/g, '&');
    }

    function parsePptxSlideXml(xmlText) {
        if (typeof DOMParser !== 'undefined') {
            try {
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
                
                // Use namespace-wildcard element lookups for paragraphs
                let paragraphs = xmlDoc.getElementsByTagNameNS('*', 'p');
                if (!paragraphs || paragraphs.length === 0) {
                    paragraphs = xmlDoc.getElementsByTagName('a:p');
                }
                if (!paragraphs || paragraphs.length === 0) {
                    paragraphs = xmlDoc.getElementsByTagName('p');
                }

                let lines = [];
                if (paragraphs && paragraphs.length > 0) {
                    for (let i = 0; i < paragraphs.length; i++) {
                        const p = paragraphs[i];
                        let textNodes = p.getElementsByTagNameNS('*', 't');
                        if (!textNodes || textNodes.length === 0) {
                            textNodes = p.getElementsByTagName('a:t');
                        }
                        if (!textNodes || textNodes.length === 0) {
                            textNodes = p.getElementsByTagName('t');
                        }
                        let lineText = '';
                        for (let j = 0; j < textNodes.length; j++) {
                            lineText += textNodes[j].textContent;
                        }
                        if (lineText.trim()) {
                            lines.push(decodeXmlEntities(lineText.trim()));
                        }
                    }
                }

                // Fallback: extract all text nodes directly if paragraph breakdown was empty
                if (lines.length === 0) {
                    let allTextNodes = xmlDoc.getElementsByTagNameNS('*', 't');
                    if (!allTextNodes || allTextNodes.length === 0) {
                        allTextNodes = xmlDoc.getElementsByTagName('a:t');
                    }
                    if (!allTextNodes || allTextNodes.length === 0) {
                        allTextNodes = xmlDoc.getElementsByTagName('t');
                    }
                    for (let j = 0; j < allTextNodes.length; j++) {
                        const txt = allTextNodes[j].textContent;
                        if (txt && txt.trim()) {
                            lines.push(decodeXmlEntities(txt.trim()));
                        }
                    }
                }

                if (lines.length > 0) return lines.join('\n');
            } catch (e) {
                console.warn('DOMParser failed on pptx slide xml:', e);
            }
        }

        // Fallback regex matching <a:p>, <p:p>, or <p> tags and inner <a:t>, <p:t>, or <t> tags
        const paragraphs = xmlText.match(/<(?:a:|p:|w:)?p\b[\s\S]*?<\/(?:a:|p:|w:)?p>/gi) || [xmlText];
        let lines = [];
        for (let pXml of paragraphs) {
            const tMatches = pXml.match(/<(?:a:|p:|w:)?t\b[^>]*>([\s\S]*?)<\/(?:a:|p:|w:)?t>/gi) || [];
            let line = tMatches.map(t => t.replace(/<[^>]+>/g, '')).join('');
            if (line.trim()) {
                lines.push(decodeXmlEntities(line.trim()));
            }
        }
        return lines.join('\n');
    }

    async function extractPptxWithNativeDecompression(buffer) {
        const bytes = new Uint8Array(buffer);
        let offset = 0;
        let slideEntries = [];

        while (offset < bytes.length - 30) {
            // Local file header signature 0x04034b50 ("PK\x03\x04")
            if (bytes[offset] === 0x50 && bytes[offset + 1] === 0x4b && bytes[offset + 2] === 0x03 && bytes[offset + 3] === 0x04) {
                const compMethod = bytes[offset + 8] | (bytes[offset + 9] << 8);
                const compSize = bytes[offset + 18] | (bytes[offset + 19] << 8) | (bytes[offset + 20] << 16) | (bytes[offset + 21] << 24);
                const fileNameLen = bytes[offset + 26] | (bytes[offset + 27] << 8);
                const extraLen = bytes[offset + 28] | (bytes[offset + 29] << 8);

                let fileName = '';
                for (let i = 0; i < fileNameLen; i++) {
                    fileName += String.fromCharCode(bytes[offset + 30 + i]);
                }

                const dataOffset = offset + 30 + fileNameLen + extraLen;

                if (/^ppt\/(slides|notesSlides)\/(slide|notesSlide)\d+\.xml$/i.test(fileName)) {
                    const fileData = bytes.subarray(dataOffset, dataOffset + compSize);
                    let xmlText = '';

                    if (compMethod === 8 && typeof DecompressionStream !== 'undefined') {
                        try {
                            const ds = new DecompressionStream('deflate-raw');
                            const response = new Response(new Blob([fileData]).stream().pipeThrough(ds));
                            xmlText = await response.text();
                        } catch (e) {
                            console.warn('DecompressionStream error for ' + fileName, e);
                        }
                    } else if (compMethod === 0) {
                        xmlText = new TextDecoder().decode(fileData);
                    }

                    if (xmlText) {
                        const parsed = parsePptxSlideXml(xmlText);
                        if (parsed && parsed.trim()) {
                            const slideNum = parseInt(fileName.match(/\d+/)?.[0] || '0', 10);
                            const isNotes = fileName.includes('notes');
                            slideEntries.push({ fileName, slideNum, isNotes, text: parsed.trim() });
                        }
                    }
                }

                offset = dataOffset + compSize;
            } else {
                offset++;
            }
        }

        if (slideEntries.length === 0) return '';

        slideEntries.sort((a, b) => {
            if (a.isNotes !== b.isNotes) return a.isNotes ? 1 : -1;
            return a.slideNum - b.slideNum;
        });

        return slideEntries.map(e => e.text).join('\n\n');
    }

    function extractPrintableStringsFromArrayBuffer(buffer) {
        const bytes = new Uint8Array(buffer);
        let extracted = '';
        let currentWord = '';

        for (let i = 0; i < bytes.length; i++) {
            const charCode = bytes[i];
            if ((charCode >= 32 && charCode <= 126) || charCode === 10 || charCode === 13 || charCode === 9) {
                currentWord += String.fromCharCode(charCode);
            } else {
                if (currentWord.trim().length >= 3) {
                    extracted += currentWord + '\n';
                }
                currentWord = '';
            }
        }
        if (currentWord.trim().length >= 3) {
            extracted += currentWord + '\n';
        }

        const cleanedLines = extracted.split('\n').filter(line => {
            const trimmed = line.trim();
            // Filter out XML markup, openxml schema URLs, zip paths, PDF syntax, and formatting noise
            return trimmed.length > 3 &&
                   /[a-zA-Z0-9]/.test(trimmed) &&
                   !trimmed.includes('openxmlformats.org') &&
                   !trimmed.includes('schemas.microsoft.com') &&
                   !trimmed.startsWith('PK') &&
                   !trimmed.startsWith('<?xml') &&
                   !trimmed.startsWith('%PDF-') &&
                   !trimmed.includes('endobj') &&
                   !trimmed.includes('endstream') &&
                   !trimmed.includes('startxref') &&
                   !trimmed.includes('trailer') &&
                   !trimmed.includes('[Content_Types]') &&
                   !trimmed.includes('word/_rels/') &&
                   !trimmed.includes('ppt/_rels/') &&
                   !trimmed.includes('ppt/slides/');
        });

        return cleanedLines.join(' ');
    }

    // F5 AI Guardrails API Scanner Call
    async function scanTextWithF5Guardrails(text, fileName) {
        const cfg = getGuardrailsConfig();

        if (!cfg.enabled) {
            return {
                outcome: 'cleared',
                skipped: true,
                message: 'F5 AI Guardrails scan skipped (Disabled in Admin Portal).'
            };
        }

        if (!text || text.trim().length === 0) {
            return {
                outcome: 'cleared',
                skipped: true,
                message: 'No readable text content extracted from document; skipping text guardrails scan.'
            };
        }

        const proxyUrl = `${cfg.proxyPath.replace(/\/$/, '')}/backend/v1/scans`;
        const headers = {
            'Content-Type': 'application/json',
            'X-Guardrails-Target-Host': cfg.targetHost,
            'X-Guardrails-Proto': cfg.proto
        };

        if (cfg.token) {
            headers['Authorization'] = `Bearer ${cfg.token}`;
        }

        const payload = {
            input: text.substring(0, 50000),
            project: cfg.project,
            scanDirection: cfg.scanDirection,
            flagOnly: false,
            verbose: true
        };

        try {
            const response = await fetch(proxyUrl, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(payload)
            });

            if (response.ok || response.status === 200 || response.status === 201) {
                const data = await response.json();
                const resObj = data.result || data;
                const outcome = (resObj.outcome || data.outcome || data.status || 'cleared').toLowerCase();

                let violations = [];
                const scannerResults = resObj.scannerResults || data.scannerResults;
                if (scannerResults && Array.isArray(scannerResults)) {
                    scannerResults.forEach(sc => {
                        if (sc.outcome === 'blocked' || sc.outcome === 'flagged' || sc.status === 'blocked' || sc.status === 'flagged' || sc.score > 0.5) {
                            const scName = sc.name || sc.scannerName || sc.scannerId || 'Security Scanner';
                            const scReason = sc.reason || sc.detail || sc.matchedText || (sc.outcome ? `Outcome: ${sc.outcome}` : 'Violation detected');
                            violations.push(`${scName}: ${scReason}`);
                        }
                    });
                }

                if (data.threats && Array.isArray(data.threats)) {
                    data.threats.forEach(th => violations.push(`Threat Detected: ${th.name || th.type}`));
                }

                return {
                    outcome: outcome,
                    data: data,
                    violations: violations,
                    message: outcome === 'blocked' || outcome === 'flagged' || violations.length > 0
                        ? `Document BLOCKED by F5 AI Guardrails!`
                        : `Guardrails Scan Cleared (0 violations).`
                };
            } else {
                const errText = await response.text().catch(() => '');
                console.warn('Guardrails API HTTP response warning:', response.status, errText);
                return {
                    outcome: 'errored',
                    message: `Guardrails API returned HTTP ${response.status}: ${errText.substring(0, 150)}`
                };
            }
        } catch (err) {
            console.error('Guardrails request exception:', err);
            return {
                outcome: 'errored',
                message: `Guardrails connection error: ${err.message}`
            };
        }
    }

    // Upload Document (POST / PUT) with 3-Step F5 Guardrails Pipeline
    if (s3UploadForm) {
        s3UploadForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const file = s3FileInput.files[0];
            const objectKey = s3ObjectKey.value.trim();
            const contentType = document.getElementById('s3-content-type').value;
            const cfg = getS3Config();

            if (!file || !objectKey) {
                showS3Alert('Please select a file and provide an object key.', 'error');
                return;
            }

            // Step 1: Extract Document Text
            showS3Alert(`[Step 1/3] Extracting text content from "${file.name}"...`, 'info');
            let extractedText = '';
            try {
                extractedText = await extractTextFromDocument(file);
            } catch (extErr) {
                console.warn('Text extraction warning:', extErr);
            }

            // Step 2: F5 AI Guardrails Out-Of-Band Scan
            const guardrailsCfg = getGuardrailsConfig();
            if (guardrailsCfg.enabled) {
                showS3Alert(`[Step 2/3] Scanning extracted text with F5 AI Guardrails (${extractedText.length} chars extracted)...`, 'info');
                const scanResult = await scanTextWithF5Guardrails(extractedText, file.name);

                if (scanResult.outcome === 'blocked' || scanResult.outcome === 'flagged' || (scanResult.violations && scanResult.violations.length > 0)) {
                    // PREVENT S3 UPLOAD!
                    const detailMsg = scanResult.violations && scanResult.violations.length > 0
                        ? scanResult.violations.join('; ')
                        : 'Policy / PII violation detected by F5 AI Guardrails.';
                    showS3Alert(`⛔ UPLOAD BLOCKED by F5 AI Guardrails!\nFile "${file.name}" failed security scan.\nDetails: ${detailMsg}`, 'error');
                    return; // STOP PIPELINE - DO NOT UPLOAD TO S3
                } else if (scanResult.outcome === 'errored') {
                    showS3Alert(`⛔ UPLOAD BLOCKED: F5 Guardrails Scan Error: ${scanResult.message}`, 'error');
                    return; // STOP PIPELINE ON AUTH OR CONNECTION ERROR
                } else {
                    showS3Alert(`[Step 3/3] Guardrails Scan Cleared ✅. Uploading to MinIO S3...`, 'info');
                }
            } else {
                showS3Alert(`[Step 3/3] Guardrails scan disabled. Uploading directly to MinIO S3...`, 'info');
            }

            // Step 3: Upload to MinIO S3 (PUT)
            const proxyUrl = `${cfg.proxyPath.replace(/\/$/, '')}/${cfg.bucket}/${encodeURIComponent(objectKey)}`;
            const s3Path = `/${cfg.bucket}/${objectKey}`;

            const baseHeaders = {
                'Content-Type': contentType,
                'X-S3-Target-Host': cfg.targetHost,
                'X-S3-Proto': cfg.protocol
            };

            const reqHeaders = await getAwsSigV4Headers({
                method: 'PUT',
                path: s3Path,
                headers: baseHeaders,
                payload: file,
                accessKey: cfg.accessKey,
                secretKey: cfg.secretKey,
                hostHeader: cfg.targetHost
            });

            try {
                const res = await fetch(proxyUrl, {
                    method: 'PUT',
                    headers: reqHeaders,
                    body: file
                });

                if (res.ok || res.status === 200 || res.status === 201 || res.status === 204) {
                    showS3Alert(`✅ Success! Guardrails Passed & Uploaded "${objectKey}" to MinIO AIStore bucket "${cfg.bucket}"!`, 'success');
                    s3UploadForm.reset();
                    await s3ListDocuments();
                } else {
                    const errText = await res.text().catch(() => '');
                    throw new Error(`MinIO S3 returned HTTP ${res.status}${errText ? ': ' + errText.substring(0, 150) : ''}`);
                }
            } catch (err) {
                console.error('S3 upload error:', err);
                showS3Alert(`Upload failed: ${err.message}`, 'error');
            }
        });
    }

    // Download Document (GET)
    async function s3DownloadDocument(key) {
        const cfg = getS3Config();
        const downloadUrl = `${cfg.proxyPath.replace(/\/$/, '')}/${cfg.bucket}/${encodeURIComponent(key)}`;
        window.open(downloadUrl, '_blank');
        showS3Alert(`Initiated GET download request for "${key}" from ${cfg.targetHost}`, 'success');
    }

    // Delete Document (DELETE)
    async function s3DeleteDocument(key) {
        const cfg = getS3Config();
        if (!confirm(`Are you sure you want to HTTP DELETE object "${key}" from bucket "${cfg.bucket}" on MinIO AIStore host ${cfg.targetHost}?`)) {
            return;
        }

        const proxyUrl = `${cfg.proxyPath.replace(/\/$/, '')}/${cfg.bucket}/${encodeURIComponent(key)}`;
        const s3Path = `/${cfg.bucket}/${key}`;

        const baseHeaders = {
            'X-S3-Target-Host': cfg.targetHost,
            'X-S3-Proto': cfg.protocol
        };

        const reqHeaders = await getAwsSigV4Headers({
            method: 'DELETE',
            path: s3Path,
            headers: baseHeaders,
            payload: '',
            accessKey: cfg.accessKey,
            secretKey: cfg.secretKey,
            hostHeader: cfg.targetHost
        });

        try {
            const res = await fetch(proxyUrl, { method: 'DELETE', headers: reqHeaders });
            if (res.ok || res.status === 204 || res.status === 200) {
                showS3Alert(`HTTP DELETE successful for object "${key}" on ${cfg.targetHost}`, 'success');
                await s3ListDocuments();
            } else {
                const errText = await res.text().catch(() => '');
                throw new Error(`MinIO S3 returned HTTP ${res.status}${errText ? ': ' + errText.substring(0, 150) : ''}`);
            }
        } catch (err) {
            console.error('S3 delete error:', err);
            showS3Alert(`Delete failed: ${err.message}`, 'error');
        }
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

    function getContentTypeFromKey(key, fileType) {
        if (fileType && s3ContentTypeSelect && Array.from(s3ContentTypeSelect.options).some(opt => opt.value === fileType)) {
            return fileType;
        }
        const lower = (key || '').toLowerCase();
        if (lower.endsWith('.docx') || lower.endsWith('.docm') || lower.endsWith('.dotx')) {
            return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
        }
        if (lower.endsWith('.doc')) return 'application/msword';
        if (lower.endsWith('.pptx')) return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
        if (lower.endsWith('.ppt')) return 'application/vnd.ms-powerpoint';
        if (lower.endsWith('.xlsx')) return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        if (lower.endsWith('.xls')) return 'application/vnd.ms-excel';
        if (lower.endsWith('.pdf')) return 'application/pdf';
        if (lower.endsWith('.txt') || lower.endsWith('.log')) return 'text/plain';
        if (lower.endsWith('.md') || lower.endsWith('.markdown')) return 'text/markdown';
        if (lower.endsWith('.html') || lower.endsWith('.htm')) return 'text/html';
        if (lower.endsWith('.json')) return 'application/json';
        if (lower.endsWith('.csv')) return 'text/csv';
        if (lower.endsWith('.xml')) return 'application/xml';
        if (lower.endsWith('.rtf')) return 'application/rtf';
        if (lower.endsWith('.png')) return 'image/png';
        if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
        if (lower.endsWith('.gif')) return 'image/gif';
        if (lower.endsWith('.svg')) return 'image/svg+xml';
        if (lower.endsWith('.webp')) return 'image/webp';
        if (lower.endsWith('.zip')) return 'application/zip';
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
