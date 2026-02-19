/* ======================================================================
   InvoiceHub — Multi-Cell Invoice Wizard Application
   ====================================================================== */

// ──────────────────────────────────────────
// DATA MODEL
// ──────────────────────────────────────────
const CELLS = [
    { id: 'AM', name: 'AM', fullName: 'Amsterdam',        employees: 18, color: '#3b82f6' },
    { id: 'AT', name: 'AT', fullName: 'Athens',           employees: 14, color: '#a855f7' },
    { id: 'BA', name: 'BA', fullName: 'Baar',             employees: 22, color: '#22c55e' },
    { id: 'DO', name: 'DO', fullName: 'Dornbirn',         employees: 12, color: '#ec4899' },
    { id: 'DU', name: 'DU', fullName: 'Dusseldorf',       employees: 20, color: '#f97316' },
    { id: 'FE', name: 'FE', fullName: 'Feldkirch',        employees: 10, color: '#14b8a6' },
    { id: 'FF', name: 'FF', fullName: 'Frankfurt',        employees: 28, color: '#6366f1' },
    { id: 'HD', name: 'HD', fullName: 'Heidelberg',       employees: 16, color: '#f59e0b' },
    { id: 'MU', name: 'MU', fullName: 'Munich',           employees: 32, color: '#ef4444' },
    { id: 'RB', name: 'RB', fullName: 'Regensburg',       employees: 12, color: '#8b5cf6' },
    { id: 'SO', name: 'SO', fullName: 'Sofia',            employees: 24, color: '#10b981' },
    { id: 'ST', name: 'ST', fullName: 'Stuttgart',        employees: 26, color: '#0ea5e9' },
    { id: 'US', name: 'US', fullName: 'Uster',            employees: 30, color: '#d946ef' },
    { id: 'VI', name: 'VI', fullName: 'Vienna',           employees: 22, color: '#f43f5e' },
    { id: 'ZU', name: 'ZU', fullName: 'Zurich',           employees: 34, color: '#84cc16' },
];

const SENIORITY_LEVELS = [
    { id: 'junior',    label: 'Junior',       rate: 85  },
    { id: 'mid',       label: 'Mid-Level',    rate: 125 },
    { id: 'senior',    label: 'Senior',       rate: 175 },
    { id: 'principal', label: 'Principal',    rate: 240 },
];

const EMPLOYEES_DB = [
    // AM — Amsterdam
    { id: 'e1',  name: 'Alice Martin',       cell: 'AM', seniority: 'senior',    avatar: '#3b82f6' },
    { id: 'e2',  name: 'Bob Thompson',       cell: 'AM', seniority: 'mid',       avatar: '#6366f1' },
    // AT — Athens
    { id: 'e3',  name: 'Nikos Papadopoulos', cell: 'AT', seniority: 'senior',    avatar: '#a855f7' },
    { id: 'e4',  name: 'Elena Kosta',        cell: 'AT', seniority: 'mid',       avatar: '#ec4899' },
    // BA — Baar
    { id: 'e5',  name: 'Marco Bianchi',      cell: 'BA', seniority: 'senior',    avatar: '#22c55e' },
    { id: 'e6',  name: 'Sarah Müller',       cell: 'BA', seniority: 'junior',    avatar: '#f59e0b' },
    // DO — Dornbirn
    { id: 'e7',  name: 'Thomas Brunner',     cell: 'DO', seniority: 'senior',    avatar: '#ec4899' },
    { id: 'e8',  name: 'Lisa Berger',        cell: 'DO', seniority: 'junior',    avatar: '#14b8a6' },
    // DU — Dusseldorf
    { id: 'e9',  name: 'Michael Richter',    cell: 'DU', seniority: 'principal', avatar: '#f97316' },
    { id: 'e10', name: 'Christina Becker',   cell: 'DU', seniority: 'senior',    avatar: '#3b82f6' },
    // FE — Feldkirch
    { id: 'e11', name: 'Andreas Moser',      cell: 'FE', seniority: 'senior',    avatar: '#6366f1' },
    { id: 'e12', name: 'Maria Gruber',       cell: 'FE', seniority: 'mid',       avatar: '#14b8a6' },
    // FF — Frankfurt
    { id: 'e13', name: 'Hans Schmidt',       cell: 'FF', seniority: 'principal', avatar: '#6366f1' },
    { id: 'e14', name: 'Ines Braun',         cell: 'FF', seniority: 'senior',    avatar: '#f59e0b' },
    { id: 'e15', name: 'Jan Fischer',        cell: 'FF', seniority: 'mid',       avatar: '#22c55e' },
    // HD — Heidelberg
    { id: 'e16', name: 'Klaus Wagner',       cell: 'HD', seniority: 'senior',    avatar: '#a855f7' },
    { id: 'e17', name: 'Laura Beck',         cell: 'HD', seniority: 'junior',    avatar: '#ec4899' },
    // MU — Munich
    { id: 'e18', name: 'Maximilian Huber',   cell: 'MU', seniority: 'principal', avatar: '#ef4444' },
    { id: 'e19', name: 'Franziska Weber',    cell: 'MU', seniority: 'senior',    avatar: '#8b5cf6' },
    { id: 'e20', name: 'Georg Stadler',      cell: 'MU', seniority: 'mid',       avatar: '#10b981' },
    // RB — Regensburg
    { id: 'e21', name: 'Stefan Maier',       cell: 'RB', seniority: 'senior',    avatar: '#0ea5e9' },
    { id: 'e22', name: 'Petra Engel',        cell: 'RB', seniority: 'junior',    avatar: '#d946ef' },
    // SO — Sofia
    { id: 'e23', name: 'Georgi Ivanov',      cell: 'SO', seniority: 'principal', avatar: '#10b981' },
    { id: 'e24', name: 'Maria Petrova',      cell: 'SO', seniority: 'senior',    avatar: '#f43f5e' },
    { id: 'e25', name: 'Nikolay Dimitrov',   cell: 'SO', seniority: 'mid',       avatar: '#84cc16' },
    // ST — Stuttgart
    { id: 'e26', name: 'Helmut Gruber',      cell: 'ST', seniority: 'principal', avatar: '#0ea5e9' },
    { id: 'e27', name: 'Sabine Kraft',       cell: 'ST', seniority: 'senior',    avatar: '#14b8a6' },
    { id: 'e28', name: 'Tobias Roth',        cell: 'ST', seniority: 'mid',       avatar: '#a855f7' },
    // US — Uster
    { id: 'e29', name: 'Daniel Stadelmann',  cell: 'US', seniority: 'principal', avatar: '#d946ef' },
    { id: 'e30', name: 'Noah Keller',        cell: 'US', seniority: 'senior',    avatar: '#f43f5e' },
    { id: 'e31', name: 'Sophie Meier',       cell: 'US', seniority: 'mid',       avatar: '#84cc16' },
    // VI — Vienna
    { id: 'e32', name: 'Erik Müller',        cell: 'VI', seniority: 'senior',    avatar: '#06b6d4' },
    { id: 'e33', name: 'Anna Hofmann',       cell: 'VI', seniority: 'mid',       avatar: '#fb923c' },
    { id: 'e34', name: 'Markus Steiner',     cell: 'VI', seniority: 'junior',    avatar: '#3b82f6' },
    // ZU — Zurich
    { id: 'e35', name: 'Marc Dupont',        cell: 'ZU', seniority: 'principal', avatar: '#84cc16' },
    { id: 'e36', name: 'Katrin Steiner',     cell: 'ZU', seniority: 'senior',    avatar: '#06b6d4' },
    { id: 'e37', name: 'Lukas Frei',         cell: 'ZU', seniority: 'mid',       avatar: '#fb923c' },
];

const CLIENTS_DB = [
    { id: 'c1',  name: 'Geberit International AG',                    contact: 'Thomas Keller',    email: 'thomas.keller@geberit.com',    status: 'active' },
    { id: 'c2',  name: 'Hellmann Worldwide Logistics Germany GmbH',   contact: 'Klaus Weber',      email: 'k.weber@hellmann.com',         status: 'active' },
    { id: 'c3',  name: 'ABK Allgemeine Beamten Bank AG',              contact: 'Petra Braun',      email: 'p.braun@abk-bank.de',          status: 'active' },
    { id: 'c4',  name: 'Acosorb BV',                                  contact: 'Jan de Vries',     email: 'j.devries@acosorb.nl',         status: 'active' },
    { id: 'c5',  name: 'Active Solution GmbH',                        contact: 'Martin Fischer',   email: 'm.fischer@activesolution.de',  status: 'active' },
    { id: 'c6',  name: 'AGRAVIS Raiffeisen AG',                       contact: 'Hans Müller',      email: 'h.mueller@agravis.de',         status: 'active' },
    { id: 'c7',  name: 'Albert Berner GmbH',                          contact: 'Stefan Berner',    email: 's.berner@berner-group.com',    status: 'active' },
    { id: 'c8',  name: 'ams AG',                                      contact: 'Lukas Hofmann',    email: 'l.hofmann@ams.com',            status: 'active' },
    { id: 'c9',  name: 'ams-OSRAM International GmbH',                contact: 'Anna Schmidt',     email: 'a.schmidt@ams-osram.com',      status: 'active' },
    { id: 'c10', name: 'Amt für Informatik Kanton Thurgau',           contact: 'Daniel Meier',     email: 'd.meier@tg.ch',                status: 'active' },
    { id: 'c11', name: 'Assura Krankenkasse',                         contact: 'Marc Dupont',      email: 'm.dupont@assura.ch',           status: 'active' },
];

const PROJECTS_DB = [
    // Geberit International AG projects
    { id: 'p1',  code: 'GBINACC',  name: 'Account Management',                status: 'active',   clientId: 'c1' },
    { id: 'p2',  code: 'GBINCAP',  name: 'Capability Map',                    status: 'active',   clientId: 'c1' },
    { id: 'p3',  code: 'GBINPDM',  name: 'Cloud Engineering',                 status: 'active',   clientId: 'c1' },
    { id: 'p4',  code: 'GBINPDM',  name: 'Data Exchange',                     status: 'active',   clientId: 'c1' },
    { id: 'p5',  code: 'GBINPDM',  name: 'Online Catalogue',                  status: 'active',   clientId: 'c1' },
    { id: 'p6',  code: 'GBINPDM',  name: 'Platform',                          status: 'active',   clientId: 'c1' },
    { id: 'p7',  code: 'GBINPRI',  name: 'Print',                             status: 'active',   clientId: 'c1' },
    { id: 'p8',  code: 'GBINREV',  name: 'Expert Reviews',                    status: 'active',   clientId: 'c1' },
    { id: 'p9',  code: 'GBINTRA',  name: 'Translation Management',            status: 'active',   clientId: 'c1' },
    { id: 'p10', code: 'GBINUXO',  name: 'UX Design Online Catalogue',        status: 'active',   clientId: 'c1' },
    { id: 'p11', code: 'GBINUXP',  name: 'UX Design PRM',                     status: 'active',   clientId: 'c1' },
    { id: 'p12', code: 'GBINWMI',  name: 'Webshop Migration',                 status: 'active',   clientId: 'c1' },
    // Hellmann Worldwide Logistics
    { id: 'p20', code: 'HELLLOG',  name: 'Logistics Platform Redesign',          status: 'active',   clientId: 'c2' },
    { id: 'p21', code: 'HELLWMS',  name: 'Warehouse Management System',          status: 'active',   clientId: 'c2' },
    // ABK Allgemeine Beamten Bank AG
    { id: 'p22', code: 'ABK',      name: 'Pflege und Weiterentwicklung des "Middle Office"', status: 'active', clientId: 'c3' },
    { id: 'p23', code: 'ABKDMS',   name: 'Document Management System',           status: 'active',   clientId: 'c3' },
    // Acosorb BV
    { id: 'p24', code: 'ACOSCON',  name: 'Control Plan (PO 4810236316)',          status: 'active',   clientId: 'c4' },
    // Active Solution GmbH
    { id: 'p25', code: 'ACTCRM',   name: 'CRM Integration',                      status: 'active',   clientId: 'c5' },
    // AGRAVIS Raiffeisen AG
    { id: 'p26', code: 'AGRAPIM',  name: 'Betrieb und Support aktuelles PIM-System', status: 'active', clientId: 'c6' },
    // Albert Berner GmbH
    { id: 'p27', code: 'BERNSHP',  name: 'E-Commerce Shop Migration',            status: 'active',   clientId: 'c7' },
    // ams AG
    { id: 'p28', code: 'AMSIOT',   name: 'IoT Sensor Dashboard',                 status: 'active',   clientId: 'c8' },
    // ams-OSRAM International GmbH
    { id: 'p29', code: 'OSRLED',   name: 'LED Product Configurator',             status: 'active',   clientId: 'c9' },
    // Amt für Informatik Kanton Thurgau
    { id: 'p30', code: 'TGPORT',   name: 'Bürgerportal Modernisierung',          status: 'active',   clientId: 'c10' },
    // Assura Krankenkasse
    { id: 'p31', code: 'ASSAPP',   name: 'Mobile App Versichertenportal',        status: 'active',   clientId: 'c11' },
];

const TAX_RATES = {
    AM: 0.21,  // Netherlands
    AT: 0.24,  // Greece
    BA: 0.081, // Switzerland (Baar)
    DO: 0.20,  // Austria (Dornbirn)
    DU: 0.19,  // Germany (Dusseldorf)
    FE: 0.20,  // Austria (Feldkirch)
    FF: 0.19,  // Germany (Frankfurt)
    HD: 0.19,  // Germany (Heidelberg)
    MU: 0.19,  // Germany (Munich)
    RB: 0.19,  // Germany (Regensburg)
    SO: 0.20,  // Bulgaria (Sofia)
    ST: 0.19,  // Germany (Stuttgart)
    US: 0.081, // Switzerland (Uster)
    VI: 0.20,  // Austria (Vienna)
    ZU: 0.081, // Switzerland (Zurich)
};

const CELL_RATE_CARDS = {
    AM: { currency: 'EUR', symbol: '€', salesFee: 0.09, rates: { junior: 70, mid: 110, senior: 160, principal: 230 } },
    AT: { currency: 'EUR', symbol: '€', salesFee: 0.08, rates: { junior: 65, mid: 100, senior: 150, principal: 220 } },
    BA: { currency: 'CHF', symbol: 'CHF ', salesFee: 0.09, rates: { junior: 85, mid: 130, senior: 185, principal: 270 } },
    DO: { currency: 'EUR', symbol: '€', salesFee: 0.08, rates: { junior: 68, mid: 105, senior: 155, principal: 225 } },
    DU: { currency: 'EUR', symbol: '€', salesFee: 0.08, rates: { junior: 75, mid: 115, senior: 170, principal: 245 } },
    FE: { currency: 'EUR', symbol: '€', salesFee: 0.08, rates: { junior: 68, mid: 105, senior: 155, principal: 225 } },
    FF: { currency: 'EUR', symbol: '€', salesFee: 0.08, rates: { junior: 75, mid: 115, senior: 170, principal: 245 } },
    HD: { currency: 'EUR', symbol: '€', salesFee: 0.08, rates: { junior: 70, mid: 110, senior: 160, principal: 235 } },
    MU: { currency: 'EUR', symbol: '€', salesFee: 0.08, rates: { junior: 75, mid: 115, senior: 170, principal: 245 } },
    RB: { currency: 'EUR', symbol: '€', salesFee: 0.08, rates: { junior: 65, mid: 105, senior: 155, principal: 225 } },
    SO: { currency: 'EUR', symbol: '€', salesFee: 0.07, rates: { junior: 45, mid: 70, senior: 105, principal: 155 } },
    ST: { currency: 'EUR', symbol: '€', salesFee: 0.08, rates: { junior: 70, mid: 110, senior: 165, principal: 240 } },
    US: { currency: 'CHF', symbol: 'CHF ', salesFee: 0.09, rates: { junior: 85, mid: 130, senior: 185, principal: 270 } },
    VI: { currency: 'EUR', symbol: '€', salesFee: 0.08, rates: { junior: 70, mid: 108, senior: 158, principal: 230 } },
    ZU: { currency: 'CHF', symbol: 'CHF ', salesFee: 0.09, rates: { junior: 88, mid: 135, senior: 190, principal: 280 } },
};

// ──────────────────────────────────────────
// APPLICATION STATE
// ──────────────────────────────────────────
let state = {
    currentView: 'dashboard',
    invoices: [],
    wizard: {
        currentStep: 1,
        data: resetWizardData(),
    },
};

function resetWizardData() {
    return {
        projectId: '',
        projectName: '',
        clientId: '',
        invoiceNumber: '',
        invoicingCell: '',
        projectManagerId: '',
        bookingDate: '',
        bookingNameId: '',
        projectType: 'time-material',
        billingPeriodStart: '',
        billingPeriodEnd: '',
        description: '',
        currency: 'CHF',
        selectedCells: [],
        teamEntries: [], // { employeeId, hours }
        applyTax: true,
        taxCell: '', // which cell's tax rate to use
        discountType: 'none', // none, percentage, fixed
        discountValue: 0,
        rushSurcharge: false,
        crossCellFee: false,
        notes: '',
        paymentTerms: 'net30',
    };
}

// ──────────────────────────────────────────
// UTILITY
// ──────────────────────────────────────────
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

function formatCurrency(amount, currency = 'EUR') {
    const sym = { EUR: '€', USD: '$', GBP: '£', CHF: 'CHF ' };
    return (sym[currency] || '€') + amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getInitials(name) {
    return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

function generateInvoiceNumber() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const seq = String(state.invoices.length + 1).padStart(4, '0');
    return `INV-${y}${m}-${seq}`;
}

function showToast(message, type = 'info') {
    const container = $('#toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
}

function getEmployeeById(id) { return EMPLOYEES_DB.find(e => e.id === id); }
function getCellById(id) { return CELLS.find(c => c.id === id); }
function getClientById(id) { return CLIENTS_DB.find(c => c.id === id); }
function getSeniorityById(id) { return SENIORITY_LEVELS.find(s => s.id === id); }

// ──────────────────────────────────────────
// RATE CARDS
// ──────────────────────────────────────────
function renderRateCards() {
    const grid = $('#rate-cards-grid');
    const seniorityKeys = ['junior', 'mid', 'senior', 'principal'];
    const seniorityLabels = { junior: 'Junior', mid: 'Mid', senior: 'Senior', principal: 'Principal' };

    grid.innerHTML = CELLS.map(cell => {
        const rc = CELL_RATE_CARDS[cell.id];
        if (!rc) return '';
        const taxRate = TAX_RATES[cell.id] || 0;

        return `
            <div class="rate-card">
                <div class="rate-card-header">
                    <h3>${cell.name} — ${cell.fullName}</h3>
                    <span class="rate-card-sub">${rc.currency}</span>
                </div>
                <div class="rate-card-body">
                    <table class="rate-card-table">
                        <thead>
                            <tr>
                                <th>Seniority</th>
                                <th>Hourly</th>
                                <th>Daily</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${seniorityKeys.map(s => {
                                const hourly = rc.rates[s];
                                const daily = hourly * 8;
                                return `
                                    <tr>
                                        <td><span class="seniority-badge ${s}">${seniorityLabels[s]}</span></td>
                                        <td>${rc.symbol}${hourly.toFixed(2)}</td>
                                        <td>${rc.symbol}${daily.toFixed(2)}</td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
                <div class="rate-card-footer">
                    <div class="rate-card-footer-row">
                        <span class="label">Sales Fee</span>
                        <span class="value">${(rc.salesFee * 100).toFixed(0)}%</span>
                    </div>
                    <div class="rate-card-footer-row">
                        <span class="label">Tax Rate</span>
                        <span class="value">${(taxRate * 100).toFixed(0)}%</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ──────────────────────────────────────────
// NAVIGATION
// ──────────────────────────────────────────
function navigateTo(view) {
    state.currentView = view;
    $$('.view').forEach(v => v.classList.remove('active'));
    $(`#${view}-view`).classList.add('active');
    $$('.nav-item').forEach(n => n.classList.remove('active'));
    const navMap = { dashboard: '#nav-dashboard', wizard: '#nav-new-invoice', invoices: '#nav-invoices', 'rate-cards': '#nav-rate-cards' };
    if (navMap[view]) $(navMap[view])?.classList.add('active');
}

function startWizard() {
    state.wizard = { currentStep: 1, data: resetWizardData() };
    navigateTo('wizard');
    renderWizardStep();
}

// ──────────────────────────────────────────
// EVENT BINDINGS
// ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    addSampleInvoices();
    renderDashboard();

    $('#btn-create-invoice').addEventListener('click', startWizard);
    $('#btn-create-first')?.addEventListener('click', startWizard);
    $('#nav-new-invoice').addEventListener('click', (e) => { e.preventDefault(); startWizard(); });
    $('#nav-dashboard').addEventListener('click', (e) => { e.preventDefault(); navigateTo('dashboard'); renderDashboard(); });
    $('#nav-invoices').addEventListener('click', (e) => { e.preventDefault(); navigateTo('dashboard'); renderDashboard(); });
    $('#nav-subsidiaries')?.addEventListener('click', (e) => { e.preventDefault(); });
    $('#nav-projects')?.addEventListener('click', (e) => { e.preventDefault(); });
    $('#nav-team')?.addEventListener('click', (e) => { e.preventDefault(); });
    $('#nav-rate-cards')?.addEventListener('click', (e) => { e.preventDefault(); navigateTo('rate-cards'); renderRateCards(); });
    $('#nav-settings')?.addEventListener('click', (e) => { e.preventDefault(); });
    $('#btn-cancel-wizard').addEventListener('click', () => { navigateTo('dashboard'); renderDashboard(); });

    $('#btn-prev').addEventListener('click', prevStep);
    $('#btn-next').addEventListener('click', nextStep);

    // Mode Switcher
    initModeSwitcher();

    // Wizard header scroll behavior
    initWizardHeaderScroll();
});

// ──────────────────────────────────────────
// WIZARD HEADER SCROLL
// ──────────────────────────────────────────
function initWizardHeaderScroll() {
    const mainContent = $('.main-content');
    const stickyHeader = $('#wizard-header-sticky');

    if (!mainContent || !stickyHeader) return;

    mainContent.addEventListener('scroll', () => {
        if (state.currentView !== 'wizard') return;

        if (mainContent.scrollTop > 50) {
            stickyHeader.classList.add('scrolled');
        } else {
            stickyHeader.classList.remove('scrolled');
        }
    });
}

// ──────────────────────────────────────────
// MODE SWITCHER (Dark / Light)
// ──────────────────────────────────────────
function initModeSwitcher() {
    const saved = localStorage.getItem('invoicehub-theme');
    if (saved === 'light') {
        document.body.classList.add('light');
        $('#mode-light').classList.add('active');
        $('#mode-dark').classList.remove('active');
    }

    $$('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            $$('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (mode === 'light') {
                document.body.classList.add('light');
            } else {
                document.body.classList.remove('light');
            }
            localStorage.setItem('invoicehub-theme', mode);
        });
    });
}

// ──────────────────────────────────────────
// SAMPLE DATA
// ──────────────────────────────────────────
function addSampleInvoices() {
    state.invoices = [
        {
            id: generateInvoiceNumber(),
            client: CLIENTS_DB[0],
            projectName: 'GBINPDM: Cloud Engineering',
            cells: ['US', 'ZU'],
            amount: 34250.00,
            status: 'paid',
            date: '2025-01-15',
            teamEntries: [
                { employeeId: 'e30', hours: 45 },  // Noah Keller (US)
                { employeeId: 'e35', hours: 60 },  // Marc Dupont (ZU)
                { employeeId: 'e31', hours: 30 },  // Sophie Meier (US)
            ],
        },
        {
            id: 'INV-202502-0002',
            client: CLIENTS_DB[2],
            projectName: 'ABK: Pflege und Weiterentwicklung des "Middle Office"',
            cells: ['MU', 'FF'],
            amount: 18750.00,
            status: 'pending',
            date: '2025-01-28',
            teamEntries: [
                { employeeId: 'e18', hours: 40 },  // Maximilian Huber (MU)
                { employeeId: 'e14', hours: 35 },  // Ines Braun (FF)
            ],
        },
        {
            id: 'INV-202502-0003',
            client: CLIENTS_DB[4],
            projectName: 'ACTCRM: CRM Integration',
            cells: ['ST', 'VI', 'MU'],
            amount: 52180.00,
            status: 'pending',
            date: '2025-02-01',
            teamEntries: [
                { employeeId: 'e26', hours: 50 },  // Helmut Gruber (ST)
                { employeeId: 'e32', hours: 40 },  // Erik Müller (VI)
                { employeeId: 'e19', hours: 55 },  // Franziska Weber (MU)
            ],
        },
        {
            id: 'INV-202502-0004',
            client: CLIENTS_DB[5],
            projectName: 'AGRAPIM: Betrieb und Support aktuelles PIM-System',
            cells: ['SO', 'AM'],
            amount: 15400.00,
            status: 'draft',
            date: '2025-02-03',
            teamEntries: [
                { employeeId: 'e23', hours: 20 },  // Georgi Ivanov (SO)
                { employeeId: 'e1', hours: 30 },   // Alice Martin (AM)
            ],
        },
    ];
}

// ──────────────────────────────────────────
// DASHBOARD
// ──────────────────────────────────────────
function renderDashboard() {
    const invoices = state.invoices;
    const total = invoices.length;
    const revenue = invoices.reduce((s, i) => s + i.amount, 0);
    const pending = invoices.filter(i => i.status === 'pending').length;

    $('#stat-total').textContent = total;
    $('#stat-revenue').textContent = formatCurrency(revenue);
    $('#stat-pending').textContent = pending;
    $('#stat-cells').textContent = CELLS.length;

    const tbody = $('#invoices-table-body');
    const emptyState = $('#empty-state');

    if (invoices.length === 0) {
        tbody.innerHTML = '';
        emptyState.style.display = 'block';
        return;
    }

    emptyState.style.display = 'none';
    tbody.innerHTML = invoices.map(inv => `
        <tr data-id="${inv.id}">
            <td><strong>${inv.id}</strong></td>
            <td>${inv.client.name}</td>
            <td>${inv.projectName}</td>
            <td>
                <div class="cell-badges">
                    ${inv.cells.map(c => `<span class="cell-badge ${c.toLowerCase()}">${c}</span>`).join('')}
                </div>
            </td>
            <td><strong>${formatCurrency(inv.amount)}</strong></td>
            <td><span class="status-badge ${inv.status}">${inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}</span></td>
            <td>${new Date(inv.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</td>
        </tr>
    `).join('');

    tbody.querySelectorAll('tr').forEach(row => {
        row.addEventListener('click', () => showInvoiceDetail(row.dataset.id));
    });
}

function showInvoiceDetail(invoiceId) {
    const inv = state.invoices.find(i => i.id === invoiceId);
    if (!inv) return;

    navigateTo('invoice-detail');
    const container = $('#invoice-detail-content');

    const teamRows = (inv.teamEntries || []).map(te => {
        const emp = getEmployeeById(te.employeeId);
        const sen = emp ? getSeniorityById(emp.seniority) : null;
        const rate = sen ? sen.rate : 0;
        return `<tr>
            <td>${emp ? emp.name : 'Unknown'}</td>
            <td><span class="cell-badge ${(emp?.cell || '').toLowerCase()}">${emp?.cell || '-'}</span></td>
            <td>${sen ? sen.label : '-'}</td>
            <td>${te.hours}h</td>
            <td>€${rate}/h</td>
            <td><strong>${formatCurrency(te.hours * rate)}</strong></td>
        </tr>`;
    }).join('');

    container.innerHTML = `
        <div class="invoice-header-bar">
            <div>
                <button class="btn btn-ghost" id="btn-back-dash" style="margin-bottom:8px;">← Back to Dashboard</button>
                <h1>${inv.id}</h1>
                <p class="subtitle">${inv.projectName}</p>
            </div>
            <span class="status-badge ${inv.status}" style="font-size:1rem;padding:8px 20px;">
                ${inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
            </span>
        </div>
        <div class="invoice-detail-grid">
            <div>
                <div class="detail-section">
                    <h3>📋 Project Details</h3>
                    <div class="review-row"><span class="label">Customer</span><span class="value">${inv.client.name}</span></div>
                    <div class="review-row"><span class="label">Contact</span><span class="value">${inv.client.contact}</span></div>
                    <div class="review-row"><span class="label">Date</span><span class="value">${new Date(inv.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
                    <div class="review-row"><span class="label">Cells Involved</span><span class="value">
                        <div class="cell-badges">${inv.cells.map(c => `<span class="cell-badge ${c.toLowerCase()}">${c}</span>`).join('')}</div>
                    </span></div>
                </div>
                <div class="detail-section">
                    <h3>👥 Team Breakdown</h3>
                    <table class="review-team-table">
                        <thead><tr><th>Employee</th><th>Cell</th><th>Seniority</th><th>Hours</th><th>Rate</th><th>Subtotal</th></tr></thead>
                        <tbody>${teamRows || '<tr><td colspan="6" style="text-align:center;color:var(--text-tertiary);">No team data available</td></tr>'}</tbody>
                    </table>
                </div>
            </div>
            <div>
                <div class="summary-card">
                    <h3>💰 Invoice Total</h3>
                    <div class="summary-total">
                        <div class="amount">${formatCurrency(inv.amount)}</div>
                        <div class="label">Total Amount</div>
                    </div>
                    <div class="breakdown-row">
                        <span class="label">Status</span>
                        <span class="value"><span class="status-badge ${inv.status}">${inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}</span></span>
                    </div>
                </div>
            </div>
        </div>
    `;

    container.querySelector('#btn-back-dash').addEventListener('click', () => {
        navigateTo('dashboard');
        renderDashboard();
    });
}

// ──────────────────────────────────────────
// WIZARD STEPS
// ──────────────────────────────────────────
function renderWizardStep() {
    const step = state.wizard.currentStep;
    const data = state.wizard.data;

    // Update progress bar
    $('#progress-fill').style.width = `${(step / 5) * 100}%`;
    $('#current-step-num').textContent = step;

    // Update step indicators
    $$('.step-indicator').forEach(si => {
        const s = parseInt(si.dataset.step);
        si.classList.remove('active', 'completed');
        if (s === step) si.classList.add('active');
        else if (s < step) si.classList.add('completed');
    });

    // Update buttons
    $('#btn-prev').disabled = step === 1;
    if (step === 5) {
        $('#btn-next').innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 8l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg> Create Invoice`;
        $('#btn-next').classList.remove('btn-primary');
        $('#btn-next').classList.add('btn-success');
    } else {
        $('#btn-next').innerHTML = `Next <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        $('#btn-next').classList.remove('btn-success');
        $('#btn-next').classList.add('btn-primary');
    }

    const container = $('#wizard-content');
    const renderers = [null, renderStep1, renderStep2, renderStep3, renderStep4, renderStep5];
    renderers[step](container, data);
}

// ──────────────────────────────────────────
// SEARCHABLE SELECT COMPONENT
// ──────────────────────────────────────────
function initSearchableSelect(containerId, items, selectedValue, onChange) {
    const wrapper = $(`#${containerId}`);
    if (!wrapper || wrapper.classList.contains('ss-disabled')) return;

    const trigger = wrapper.querySelector('.ss-trigger');
    const dropdown = wrapper.querySelector('.ss-dropdown');
    const searchInput = wrapper.querySelector('.ss-search');
    const optionsContainer = wrapper.querySelector('.ss-options');

    function renderOptions(filter = '') {
        const query = filter.toLowerCase();
        const filtered = items.filter(item => item.label.toLowerCase().includes(query));

        // Group items
        const groups = {};
        filtered.forEach(item => {
            const g = item.group || 'Other';
            if (!groups[g]) groups[g] = [];
            groups[g].push(item);
        });

        let html = '';
        for (const [groupName, groupItems] of Object.entries(groups)) {
            html += `<div class="ss-group-label">${groupName}</div>`;
            groupItems.forEach(item => {
                const isSelected = item.id === selectedValue;
                html += `<div class="ss-option ${isSelected ? 'selected' : ''}" data-value="${item.id}">
                    <span class="ss-option-label">${item.label}</span>
                    ${item.sublabel ? `<span class="ss-option-sub">${item.sublabel}</span>` : ''}
                </div>`;
            });
        }

        if (filtered.length === 0) {
            html = '<div class="ss-no-results">No results found</div>';
        }

        optionsContainer.innerHTML = html;

        // Bind click on options
        optionsContainer.querySelectorAll('.ss-option').forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                const val = opt.dataset.value;
                closeDropdown();
                onChange(val);
            });
        });
    }

    function openDropdown() {
        wrapper.classList.add('ss-open');
        searchInput.value = '';
        renderOptions();
        setTimeout(() => searchInput.focus(), 50);
    }

    function closeDropdown() {
        wrapper.classList.remove('ss-open');
    }

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (wrapper.classList.contains('ss-open')) {
            closeDropdown();
        } else {
            // Close any other open dropdowns
            $$('.searchable-select.ss-open').forEach(s => s.classList.remove('ss-open'));
            openDropdown();
        }
    });

    searchInput.addEventListener('input', () => {
        renderOptions(searchInput.value);
    });

    searchInput.addEventListener('click', (e) => e.stopPropagation());

    // Close on outside click
    document.addEventListener('click', () => closeDropdown());
    dropdown.addEventListener('click', (e) => e.stopPropagation());
}

// Helper: generate searchable select HTML
function ssHTML(id, placeholder, selectedLabel, disabled) {
    return `<div class="searchable-select ${disabled ? 'ss-disabled' : ''}" id="${id}">
        <div class="ss-trigger" tabindex="0">
            <span class="ss-value">${selectedLabel || placeholder}</span>
            <svg class="ss-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <div class="ss-dropdown">
            <div class="ss-search-wrap">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.5" stroke="currentColor" stroke-width="1.3"/><path d="M9.5 9.5L13 13" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>
                <input type="text" class="ss-search" placeholder="Search..." autocomplete="off">
            </div>
            <div class="ss-options" id="${id}-options"></div>
        </div>
    </div>`;
}

// ─── STEP 1: Customer & Project ───
function renderStep1(container, data) {
    const today = new Date().toISOString().split('T')[0];

    // Filter projects based on selected customer
    const customerProjects = data.clientId
        ? PROJECTS_DB.filter(p => p.clientId === data.clientId)
        : [];
    const activeProjects = customerProjects.filter(p => p.status === 'active');
    const archivedProjects = customerProjects.filter(p => p.status === 'archived');

    // If customer changed and current project doesn't belong to new customer, reset it
    if (data.projectId && data.clientId) {
        const proj = PROJECTS_DB.find(p => p.id === data.projectId);
        if (proj && proj.clientId !== data.clientId) {
            data.projectId = '';
            data.projectName = '';
        }
    }

    // Auto-generate invoice number if empty
    if (!data.invoiceNumber) {
        data.invoiceNumber = generateInvoiceNumber();
    }

    const selectedClient = CLIENTS_DB.find(c => c.id === data.clientId);
    const selectedProject = PROJECTS_DB.find(p => p.id === data.projectId);
    const selectedPM = EMPLOYEES_DB.find(e => e.id === data.projectManagerId);
    const selectedBooking = EMPLOYEES_DB.find(e => e.id === data.bookingNameId);
    const selectedInvCell = CELLS.find(c => c.id === data.invoicingCell);

    const projectTypeLabels = { 'time-material': 'Time & Material', 'fixed-price': 'Fixed Price', 'retainer': 'Retainer', 'milestone': 'Milestone-Based' };
    const currencyLabels = { 'EUR': 'EUR (€)', 'USD': 'USD ($)', 'GBP': 'GBP (£)', 'CHF': 'CHF' };

    container.innerHTML = `
        <div class="wizard-step">
            <h2>Customer & Project</h2>
            <p class="step-desc">Select the customer, project, and configure invoice details.</p>
            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">Customer <span class="required">*</span></label>
                    ${ssHTML('ss-client', 'Select a customer...', selectedClient ? selectedClient.name : '')}
                    <span class="form-error">Please select a customer</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Project <span class="required">*</span></label>
                    ${ssHTML('ss-project', data.clientId ? 'Select a project...' : 'Select a customer first...', selectedProject ? selectedProject.code + ': ' + selectedProject.name : '', !data.clientId)}
                    <span class="form-error">Please select a project</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Invoice Number <span class="required">*</span></label>
                    <input type="text" class="form-input" id="w-invoice-number" placeholder="e.g. INV-202602-0001" value="${data.invoiceNumber}">
                    <span class="form-error">Invoice number is required</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Invoicing Cell <span class="required">*</span></label>
                    ${ssHTML('ss-invoicing-cell', 'Select a cell...', selectedInvCell ? selectedInvCell.name + ' — ' + selectedInvCell.fullName : '')}
                    <span class="form-hint">The subsidiary that issues this invoice</span>
                    <span class="form-error">Please select an invoicing cell</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Project Manager <span class="required">*</span></label>
                    ${ssHTML('ss-pm', 'Select project manager...', selectedPM ? selectedPM.name : '')}
                    <span class="form-error">Please select a project manager</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Booking Date <span class="required">*</span></label>
                    <input type="date" class="form-input" id="w-booking-date" value="${data.bookingDate || today}">
                </div>
                <div class="form-group">
                    <label class="form-label">Booking Name <span class="required">*</span></label>
                    ${ssHTML('ss-booking', 'Select booking name...', selectedBooking ? selectedBooking.name : '')}
                    <span class="form-error">Please select a booking name</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Project Type</label>
                    ${ssHTML('ss-project-type', 'Select project type...', projectTypeLabels[data.projectType] || '')}
                </div>
                <div class="form-group">
                    <label class="form-label">Billing Period Start</label>
                    <input type="date" class="form-input" id="w-period-start" value="${data.billingPeriodStart || today}">
                </div>
                <div class="form-group">
                    <label class="form-label">Billing Period End</label>
                    <input type="date" class="form-input" id="w-period-end" value="${data.billingPeriodEnd}">
                </div>
                <div class="form-group">
                    <label class="form-label">Currency</label>
                    ${ssHTML('ss-currency', 'Select currency...', currencyLabels[data.currency] || '')}
                </div>
                <div class="form-group full">
                    <label class="form-label">Description</label>
                    <textarea class="form-textarea" id="w-description" placeholder="Brief description of the work performed...">${data.description}</textarea>
                </div>
            </div>
        </div>
    `;

    // ── Initialize searchable selects ──

    // Customer
    initSearchableSelect('ss-client', CLIENTS_DB.map(c => ({
        id: c.id,
        label: c.name,
        sublabel: (c.status || 'active').charAt(0).toUpperCase() + (c.status || 'active').slice(1),
        group: 'Active',
    })), data.clientId, (val) => {
        data.clientId = val;
        data.projectId = '';
        data.projectName = '';
        renderStep1(container, data);
    });

    // Project (depends on customer)
    if (data.clientId) {
        const projItems = [];
        if (activeProjects.length > 0) {
            activeProjects.forEach(p => projItems.push({ id: p.id, label: p.code + ': ' + p.name, group: 'Active' }));
        }
        if (archivedProjects.length > 0) {
            archivedProjects.forEach(p => projItems.push({ id: p.id, label: p.code + ': ' + p.name, group: 'Archived' }));
        }
        initSearchableSelect('ss-project', projItems, data.projectId, (val) => {
            data.projectId = val;
            const proj = PROJECTS_DB.find(p => p.id === val);
            data.projectName = proj ? `${proj.code}: ${proj.name}` : '';
            renderStep1(container, data);
        });
    }

    // Project Manager (all employees, grouped by cell)
    const pmItems = EMPLOYEES_DB.map(e => {
        const cell = getCellById(e.cell);
        const sen = getSeniorityById(e.seniority);
        return { id: e.id, label: e.name, sublabel: sen ? sen.label : '', group: cell ? cell.name + ' — ' + cell.fullName : 'Other' };
    });
    initSearchableSelect('ss-pm', pmItems, data.projectManagerId, (val) => {
        data.projectManagerId = val;
        renderStep1(container, data);
    });

    // Booking Name (all employees, grouped by cell)
    const bookingItems = EMPLOYEES_DB.map(e => {
        const cell = getCellById(e.cell);
        const sen = getSeniorityById(e.seniority);
        return { id: e.id, label: e.name, sublabel: sen ? sen.label : '', group: cell ? cell.name + ' — ' + cell.fullName : 'Other' };
    });
    initSearchableSelect('ss-booking', bookingItems, data.bookingNameId, (val) => {
        data.bookingNameId = val;
        renderStep1(container, data);
    });

    // Invoicing Cell
    initSearchableSelect('ss-invoicing-cell', CELLS.map(c => ({
        id: c.id, label: c.name + ' — ' + c.fullName, group: 'Cells',
    })), data.invoicingCell, (val) => {
        data.invoicingCell = val;
        renderStep1(container, data);
    });

    // Project Type
    const projectTypeItems = [
        { id: 'time-material', label: 'Time & Material', group: 'Types' },
        { id: 'fixed-price',   label: 'Fixed Price',     group: 'Types' },
        { id: 'retainer',      label: 'Retainer',        group: 'Types' },
        { id: 'milestone',     label: 'Milestone-Based', group: 'Types' },
    ];
    initSearchableSelect('ss-project-type', projectTypeItems, data.projectType, (val) => {
        data.projectType = val;
        renderStep1(container, data);
    });

    // Currency
    const currencyItems = [
        { id: 'EUR', label: 'EUR (€)',  group: 'Currencies' },
        { id: 'USD', label: 'USD ($)',  group: 'Currencies' },
        { id: 'GBP', label: 'GBP (£)', group: 'Currencies' },
        { id: 'CHF', label: 'CHF',     group: 'Currencies' },
    ];
    initSearchableSelect('ss-currency', currencyItems, data.currency, (val) => {
        data.currency = val;
        renderStep1(container, data);
    });
}

function saveStep1() {
    const d = state.wizard.data;
    // clientId, projectId, projectManagerId, bookingNameId are set via searchable select callbacks
    const proj = PROJECTS_DB.find(p => p.id === d.projectId);
    d.projectName = proj ? `${proj.code}: ${proj.name}` : '';
    d.invoiceNumber = $('#w-invoice-number').value.trim();
    // invoicingCell, projectType, currency are set via searchable select callbacks
    d.bookingDate = $('#w-booking-date').value;
    d.billingPeriodStart = $('#w-period-start').value;
    d.billingPeriodEnd = $('#w-period-end').value;
    d.description = $('#w-description').value;

    let valid = true;
    const requireField = (sel, isSearchable) => {
        const el = $(sel);
        if (el) el.closest('.form-group').classList.add('error');
        valid = false;
    };

    if (!d.clientId) requireField('#ss-client');
    if (!d.projectId) requireField('#ss-project');
    if (!d.invoiceNumber) requireField('#w-invoice-number');
    if (!d.invoicingCell) requireField('#ss-invoicing-cell');
    if (!d.projectManagerId) requireField('#ss-pm');
    if (!d.bookingDate) requireField('#w-booking-date');
    if (!d.bookingNameId) requireField('#ss-booking');

    return valid;
}

// ─── STEP 2: Cell Selection ───
function renderStep2(container, data) {
    container.innerHTML = `
        <div class="wizard-step">
            <h2>Select Participating Cells</h2>
            <p class="step-desc">Choose which subsidiaries (cells) are involved in this project. Employees from multiple cells can collaborate on the same invoice.</p>
            <div class="cells-grid">
                ${CELLS.map(cell => `
                    <div class="cell-card ${data.selectedCells.includes(cell.id) ? 'selected' : ''}" data-cell="${cell.id}">
                        <div class="cell-card-name" style="color: ${cell.color}">${cell.name}</div>
                        <div class="cell-card-full">${cell.fullName}</div>
                        <div class="cell-card-meta">
                            <span>👥 ${cell.employees} employees</span>
                            <span>📍 ${cell.fullName}</span>
                            <span>Tax: ${(TAX_RATES[cell.id] * 100).toFixed(1)}%</span>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="form-hint" style="text-align:center;margin-top:8px;">
                ${data.selectedCells.length === 0
                    ? '⚠️ Select at least one cell to continue'
                    : `✓ ${data.selectedCells.length} cell(s) selected — employees from these cells will be available in the next step`}
            </div>
        </div>
    `;

    container.querySelectorAll('.cell-card').forEach(card => {
        card.addEventListener('click', () => {
            const cellId = card.dataset.cell;
            const idx = data.selectedCells.indexOf(cellId);
            if (idx >= 0) data.selectedCells.splice(idx, 1);
            else data.selectedCells.push(cellId);
            renderStep2(container, data);
        });
    });
}

function saveStep2() {
    return state.wizard.data.selectedCells.length > 0;
}

// ─── STEP 3: Team & Hours ───
function renderStep3(container, data) {
    const selectedCells = data.selectedCells;
    const availableEmployees = EMPLOYEES_DB.filter(e => selectedCells.includes(e.cell));

    // Initialize team entries if empty
    if (data.teamEntries.length === 0 && availableEmployees.length > 0) {
        data.teamEntries.push({ employeeId: availableEmployees[0].id, hours: 0 });
    }

    const cellSections = selectedCells.map(cellId => {
        const cell = getCellById(cellId);
        const cellEmployees = availableEmployees.filter(e => e.cell === cellId);
        const cellEntries = data.teamEntries.filter(te => {
            const emp = getEmployeeById(te.employeeId);
            return emp && emp.cell === cellId;
        });

        const entryRows = cellEntries.map((entry, idx) => {
            const emp = getEmployeeById(entry.employeeId);
            const sen = emp ? getSeniorityById(emp.seniority) : null;
            const rate = sen ? sen.rate : 0;
            const total = entry.hours * rate;
            const globalIdx = data.teamEntries.indexOf(entry);

            return `
                <div class="employee-row" data-index="${globalIdx}">
                    <div class="employee-info">
                        <div class="employee-avatar" style="background:${emp?.avatar || '#666'}">${emp ? getInitials(emp.name) : '?'}</div>
                        <div>
                            <div class="employee-name">${emp?.name || 'Select employee'}</div>
                            <div class="employee-cell-tag">${cell.name} · ${sen?.label || '-'}</div>
                        </div>
                    </div>
                    <select class="form-select employee-select" data-idx="${globalIdx}">
                        <option value="">Select...</option>
                        ${cellEmployees.map(e => `<option value="${e.id}" ${entry.employeeId === e.id ? 'selected' : ''}>${e.name} (${getSeniorityById(e.seniority).label})</option>`).join('')}
                    </select>
                    <span class="rate-display">${data.currency === 'EUR' ? '€' : data.currency === 'USD' ? '$' : data.currency === 'GBP' ? '£' : 'CHF '}${rate}/h</span>
                    <input type="number" class="form-input hours-input" data-idx="${globalIdx}" min="0" max="999" step="0.5" value="${entry.hours}" placeholder="0">
                    <div style="display:flex;align-items:center;gap:8px;">
                        <span class="row-total">${formatCurrency(total, data.currency)}</span>
                        <button class="btn-remove" data-idx="${globalIdx}" title="Remove">×</button>
                    </div>
                </div>
            `;
        }).join('');

        const cellTotal = cellEntries.reduce((sum, entry) => {
            const emp = getEmployeeById(entry.employeeId);
            const sen = emp ? getSeniorityById(emp.seniority) : null;
            return sum + (entry.hours * (sen ? sen.rate : 0));
        }, 0);

        return `
            <div class="cell-section">
                <div class="cell-section-header">
                    <h3><span class="cell-badge ${cellId.toLowerCase()}">${cellId}</span> ${cell.fullName}</h3>
                    <span style="font-weight:700;color:var(--accent);">${formatCurrency(cellTotal, data.currency)}</span>
                </div>
                <div class="cell-section-body">
                    ${entryRows}
                    <div class="add-employee-row">
                        <button class="btn-add-employee" data-cell="${cellId}">
                            + Add Employee from ${cellId}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const grandTotal = data.teamEntries.reduce((sum, entry) => {
        const emp = getEmployeeById(entry.employeeId);
        const sen = emp ? getSeniorityById(emp.seniority) : null;
        return sum + (entry.hours * (sen ? sen.rate : 0));
    }, 0);

    container.innerHTML = `
        <div class="wizard-step">
            <h2>Assign Team Members & Hours</h2>
            <p class="step-desc">Select employees from each participating cell and enter their billable hours. Employees from different cells work together on this project.</p>
            ${cellSections}
            <div class="breakdown-mini">
                <div class="breakdown-row total">
                    <span class="label">Total Billable Amount</span>
                    <span class="value">${formatCurrency(grandTotal, data.currency)}</span>
                </div>
            </div>
        </div>
    `;

    // Event bindings
    container.querySelectorAll('.employee-select').forEach(sel => {
        sel.addEventListener('change', (e) => {
            const idx = parseInt(e.target.dataset.idx);
            data.teamEntries[idx].employeeId = e.target.value;
            renderStep3(container, data);
        });
    });

    container.querySelectorAll('.hours-input').forEach(inp => {
        inp.addEventListener('input', (e) => {
            const idx = parseInt(e.target.dataset.idx);
            data.teamEntries[idx].hours = parseFloat(e.target.value) || 0;
            renderStep3(container, data);
        });
    });

    container.querySelectorAll('.btn-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.target.dataset.idx);
            data.teamEntries.splice(idx, 1);
            renderStep3(container, data);
        });
    });

    container.querySelectorAll('.btn-add-employee').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const cellId = e.target.dataset.cell;
            const cellEmps = EMPLOYEES_DB.filter(emp => emp.cell === cellId);
            if (cellEmps.length > 0) {
                data.teamEntries.push({ employeeId: cellEmps[0].id, hours: 0 });
                renderStep3(container, data);
            }
        });
    });
}

function saveStep3() {
    const validEntries = state.wizard.data.teamEntries.filter(e => e.employeeId && e.hours > 0);
    return validEntries.length > 0;
}

// ─── STEP 4: Adjustments ───
function renderStep4(container, data) {
    const subtotal = calcSubtotal(data);
    const selectedCells = data.selectedCells;

    if (!data.taxCell && selectedCells.length > 0) data.taxCell = selectedCells[0];

    const taxRate = data.applyTax ? (TAX_RATES[data.taxCell] || 0) : 0;
    const crossCellFeeAmount = data.crossCellFee && selectedCells.length > 1 ? subtotal * 0.05 : 0;
    const rushAmount = data.rushSurcharge ? subtotal * 0.15 : 0;
    const discountAmount = calcDiscount(data, subtotal);
    const taxableAmount = subtotal + crossCellFeeAmount + rushAmount - discountAmount;
    const taxAmount = taxableAmount * taxRate;
    const total = taxableAmount + taxAmount;

    container.innerHTML = `
        <div class="wizard-step">
            <h2>Adjustments & Fees</h2>
            <p class="step-desc">Configure tax, discounts, surcharges, and cross-cell fees for this invoice.</p>
            <div class="adjustments-grid">
                <div class="adjustment-card">
                    <h3>🏛️ Tax Configuration</h3>
                    <div class="toggle-row">
                        <div>
                            <span class="toggle-label">Apply Tax</span>
                            <span class="toggle-sublabel">Enable VAT/Sales tax on this invoice</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="w-apply-tax" ${data.applyTax ? 'checked' : ''}>
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="form-group mt-4" id="tax-cell-group" style="${data.applyTax ? '' : 'opacity:0.4;pointer-events:none;'}">
                        <label class="form-label">Tax Jurisdiction (Cell)</label>
                        <select class="form-select" id="w-tax-cell">
                            ${selectedCells.map(cId => {
                                const c = getCellById(cId);
                                return `<option value="${cId}" ${data.taxCell === cId ? 'selected' : ''}>${c.name} — ${c.fullName} (${(TAX_RATES[cId]*100).toFixed(1)}%)</option>`;
                            }).join('')}
                        </select>
                        <span class="form-hint">Tax rate is determined by the billing cell's jurisdiction</span>
                    </div>
                </div>

                <div class="adjustment-card">
                    <h3>💰 Discounts</h3>
                    <div class="form-group">
                        <label class="form-label">Discount Type</label>
                        <select class="form-select" id="w-discount-type">
                            <option value="none" ${data.discountType === 'none' ? 'selected' : ''}>No Discount</option>
                            <option value="percentage" ${data.discountType === 'percentage' ? 'selected' : ''}>Percentage (%)</option>
                            <option value="fixed" ${data.discountType === 'fixed' ? 'selected' : ''}>Fixed Amount</option>
                        </select>
                    </div>
                    <div class="form-group mt-2" id="discount-value-group" style="${data.discountType === 'none' ? 'display:none;' : ''}">
                        <label class="form-label">${data.discountType === 'percentage' ? 'Discount %' : 'Discount Amount'}</label>
                        <input type="number" class="form-input" id="w-discount-value" min="0" step="0.5" value="${data.discountValue}" placeholder="0">
                    </div>
                </div>

                <div class="adjustment-card">
                    <h3>⚡ Surcharges</h3>
                    <div class="toggle-row">
                        <div>
                            <span class="toggle-label">Rush Delivery (+15%)</span>
                            <span class="toggle-sublabel">Applied for expedited project timelines</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="w-rush" ${data.rushSurcharge ? 'checked' : ''}>
                            <span class="slider"></span>
                        </label>
                    </div>
                    <div class="toggle-row">
                        <div>
                            <span class="toggle-label">Cross-Cell Coordination (+5%)</span>
                            <span class="toggle-sublabel">Fee for managing resources across ${selectedCells.length} cells</span>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="w-cross-cell" ${data.crossCellFee ? 'checked' : ''} ${selectedCells.length <= 1 ? 'disabled' : ''}>
                            <span class="slider"></span>
                        </label>
                    </div>
                </div>

                <div class="adjustment-card">
                    <h3>📝 Additional</h3>
                    <div class="form-group">
                        <label class="form-label">Payment Terms</label>
                        <select class="form-select" id="w-payment-terms">
                            <option value="net15" ${data.paymentTerms === 'net15' ? 'selected' : ''}>Net 15</option>
                            <option value="net30" ${data.paymentTerms === 'net30' ? 'selected' : ''}>Net 30</option>
                            <option value="net45" ${data.paymentTerms === 'net45' ? 'selected' : ''}>Net 45</option>
                            <option value="net60" ${data.paymentTerms === 'net60' ? 'selected' : ''}>Net 60</option>
                            <option value="immediate" ${data.paymentTerms === 'immediate' ? 'selected' : ''}>Due on Receipt</option>
                        </select>
                    </div>
                    <div class="form-group mt-2">
                        <label class="form-label">Notes</label>
                        <textarea class="form-textarea" id="w-notes" placeholder="Additional notes for the invoice...">${data.notes}</textarea>
                    </div>
                </div>
            </div>

            <div class="adjustment-card mt-4" style="background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:var(--radius);padding:20px;">
                <h3>📊 Live Cost Breakdown</h3>
                <div class="breakdown-mini">
                    <div class="breakdown-row">
                        <span class="label">Subtotal (billable hours)</span>
                        <span class="value">${formatCurrency(subtotal, data.currency)}</span>
                    </div>
                    ${data.crossCellFee && selectedCells.length > 1 ? `
                    <div class="breakdown-row">
                        <span class="label">Cross-Cell Fee (5%)</span>
                        <span class="value">+${formatCurrency(crossCellFeeAmount, data.currency)}</span>
                    </div>` : ''}
                    ${data.rushSurcharge ? `
                    <div class="breakdown-row">
                        <span class="label">Rush Surcharge (15%)</span>
                        <span class="value">+${formatCurrency(rushAmount, data.currency)}</span>
                    </div>` : ''}
                    ${discountAmount > 0 ? `
                    <div class="breakdown-row">
                        <span class="label">Discount${data.discountType === 'percentage' ? ` (${data.discountValue}%)` : ''}</span>
                        <span class="value" style="color:var(--success)">-${formatCurrency(discountAmount, data.currency)}</span>
                    </div>` : ''}
                    ${data.applyTax ? `
                    <div class="breakdown-row">
                        <span class="label">Tax (${(taxRate * 100).toFixed(1)}% — ${getCellById(data.taxCell)?.fullName})</span>
                        <span class="value">+${formatCurrency(taxAmount, data.currency)}</span>
                    </div>` : ''}
                    <div class="breakdown-row total">
                        <span class="label">Total</span>
                        <span class="value">${formatCurrency(total, data.currency)}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Bindings
    const rebind = () => { saveStep4(); renderStep4(container, data); };
    $('#w-apply-tax').addEventListener('change', rebind);
    $('#w-tax-cell').addEventListener('change', rebind);
    $('#w-discount-type').addEventListener('change', rebind);
    $('#w-discount-value')?.addEventListener('input', rebind);
    $('#w-rush').addEventListener('change', rebind);
    $('#w-cross-cell').addEventListener('change', rebind);
    $('#w-payment-terms').addEventListener('change', () => { data.paymentTerms = $('#w-payment-terms').value; });
    $('#w-notes').addEventListener('input', () => { data.notes = $('#w-notes').value; });
}

function saveStep4() {
    const d = state.wizard.data;
    d.applyTax = $('#w-apply-tax').checked;
    d.taxCell = $('#w-tax-cell')?.value || d.selectedCells[0];
    d.discountType = $('#w-discount-type').value;
    d.discountValue = parseFloat($('#w-discount-value')?.value) || 0;
    d.rushSurcharge = $('#w-rush').checked;
    d.crossCellFee = $('#w-cross-cell')?.checked || false;
    d.paymentTerms = $('#w-payment-terms')?.value || 'net30';
    d.notes = $('#w-notes')?.value || '';
    return true;
}

// ─── STEP 5: Review ───
function renderStep5(container, data) {
    const client = getClientById(data.clientId);
    const subtotal = calcSubtotal(data);
    const selectedCells = data.selectedCells;
    const taxRate = data.applyTax ? (TAX_RATES[data.taxCell] || 0) : 0;
    const crossCellFeeAmount = data.crossCellFee && selectedCells.length > 1 ? subtotal * 0.05 : 0;
    const rushAmount = data.rushSurcharge ? subtotal * 0.15 : 0;
    const discountAmount = calcDiscount(data, subtotal);
    const taxableAmount = subtotal + crossCellFeeAmount + rushAmount - discountAmount;
    const taxAmount = taxableAmount * taxRate;
    const total = taxableAmount + taxAmount;

    const totalHours = data.teamEntries.reduce((s, e) => s + e.hours, 0);

    const teamRows = data.teamEntries.filter(e => e.employeeId && e.hours > 0).map(entry => {
        const emp = getEmployeeById(entry.employeeId);
        const sen = emp ? getSeniorityById(emp.seniority) : null;
        const rate = sen ? sen.rate : 0;
        return `
            <tr>
                <td>
                    <div class="employee-info">
                        <div class="employee-avatar" style="background:${emp?.avatar || '#666'};width:28px;height:28px;font-size:0.65rem;">${emp ? getInitials(emp.name) : '?'}</div>
                        <span>${emp?.name || 'Unknown'}</span>
                    </div>
                </td>
                <td><span class="cell-badge ${(emp?.cell || '').toLowerCase()}">${emp?.cell || '-'}</span></td>
                <td>${sen?.label || '-'}</td>
                <td>${formatCurrency(rate, data.currency)}/h</td>
                <td>${entry.hours}h</td>
                <td><strong>${formatCurrency(entry.hours * rate, data.currency)}</strong></td>
            </tr>
        `;
    }).join('');

    container.innerHTML = `
        <div class="wizard-step">
            <h2>Review & Confirm</h2>
            <p class="step-desc">Please review all the details before creating the invoice.</p>
            <div class="review-grid">
                <div>
                    <div class="review-section">
                        <h3>📋 Project Details</h3>
                        <div class="review-row"><span class="label">Invoice Number</span><span class="value">${data.invoiceNumber}</span></div>
                        <div class="review-row"><span class="label">Customer</span><span class="value">${client?.name || '-'}</span></div>
                        <div class="review-row"><span class="label">Project</span><span class="value">${data.projectName}</span></div>
                        <div class="review-row"><span class="label">Invoicing Cell</span><span class="value">${getCellById(data.invoicingCell)?.name || '-'} — ${getCellById(data.invoicingCell)?.fullName || '-'}</span></div>
                        <div class="review-row"><span class="label">Project Manager</span><span class="value">${getEmployeeById(data.projectManagerId)?.name || '-'}</span></div>
                        <div class="review-row"><span class="label">Booking Date</span><span class="value">${data.bookingDate || '-'}</span></div>
                        <div class="review-row"><span class="label">Booking Name</span><span class="value">${getEmployeeById(data.bookingNameId)?.name || '-'}</span></div>
                        <div class="review-row"><span class="label">Type</span><span class="value">${data.projectType.replace('-', ' & ').replace(/\b\w/g, l => l.toUpperCase())}</span></div>
                        <div class="review-row"><span class="label">Billing Period</span><span class="value">${data.billingPeriodStart || '-'} → ${data.billingPeriodEnd || '-'}</span></div>
                        <div class="review-row"><span class="label">Cells Involved</span><span class="value">
                            <div class="cell-badges">${selectedCells.map(c => `<span class="cell-badge ${c.toLowerCase()}">${c}</span>`).join('')}</div>
                        </span></div>
                        <div class="review-row"><span class="label">Payment Terms</span><span class="value">${data.paymentTerms.replace('net', 'Net ').replace('immediate', 'Due on Receipt')}</span></div>
                        ${data.description ? `<div class="review-row" style="flex-direction:column;gap:6px;"><span class="label">Description</span><span class="value" style="font-weight:400;color:var(--text-secondary);font-size:0.88rem;">${data.description}</span></div>` : ''}
                    </div>
                    <div class="review-section">
                        <h3>👥 Team Allocation (${totalHours}h total)</h3>
                        <table class="review-team-table">
                            <thead>
                                <tr><th>Employee</th><th>Cell</th><th>Level</th><th>Rate</th><th>Hours</th><th>Subtotal</th></tr>
                            </thead>
                            <tbody>${teamRows}</tbody>
                        </table>
                    </div>
                    ${data.notes ? `
                    <div class="review-section">
                        <h3>📝 Notes</h3>
                        <p style="color:var(--text-secondary);font-size:0.9rem;">${data.notes}</p>
                    </div>` : ''}
                </div>
                <div>
                    <div class="summary-card">
                        <h3>Invoice Summary</h3>
                        <div class="breakdown-row"><span class="label">Subtotal</span><span class="value">${formatCurrency(subtotal, data.currency)}</span></div>
                        ${crossCellFeeAmount > 0 ? `<div class="breakdown-row"><span class="label">Cross-Cell Fee (5%)</span><span class="value">+${formatCurrency(crossCellFeeAmount, data.currency)}</span></div>` : ''}
                        ${rushAmount > 0 ? `<div class="breakdown-row"><span class="label">Rush Surcharge (15%)</span><span class="value">+${formatCurrency(rushAmount, data.currency)}</span></div>` : ''}
                        ${discountAmount > 0 ? `<div class="breakdown-row"><span class="label">Discount</span><span class="value" style="color:var(--success);">-${formatCurrency(discountAmount, data.currency)}</span></div>` : ''}
                        ${data.applyTax ? `<div class="breakdown-row"><span class="label">Tax (${(taxRate*100).toFixed(1)}%)</span><span class="value">+${formatCurrency(taxAmount, data.currency)}</span></div>` : ''}
                        <div class="summary-total">
                            <div class="amount">${formatCurrency(total, data.currency)}</div>
                            <div class="label">Total Amount</div>
                        </div>
                        <div class="breakdown-row mt-2"><span class="label">Invoice #</span><span class="value">${generateInvoiceNumber()}</span></div>
                        <div class="breakdown-row"><span class="label">Issue Date</span><span class="value">${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ──────────────────────────────────────────
// CALCULATIONS
// ──────────────────────────────────────────
function calcSubtotal(data) {
    return data.teamEntries.reduce((sum, entry) => {
        const emp = getEmployeeById(entry.employeeId);
        const sen = emp ? getSeniorityById(emp.seniority) : null;
        return sum + (entry.hours * (sen ? sen.rate : 0));
    }, 0);
}

function calcDiscount(data, subtotal) {
    if (data.discountType === 'percentage') return subtotal * (data.discountValue / 100);
    if (data.discountType === 'fixed') return data.discountValue;
    return 0;
}

function calcTotal(data) {
    const subtotal = calcSubtotal(data);
    const selectedCells = data.selectedCells;
    const taxRate = data.applyTax ? (TAX_RATES[data.taxCell] || 0) : 0;
    const crossCellFeeAmount = data.crossCellFee && selectedCells.length > 1 ? subtotal * 0.05 : 0;
    const rushAmount = data.rushSurcharge ? subtotal * 0.15 : 0;
    const discountAmount = calcDiscount(data, subtotal);
    const taxableAmount = subtotal + crossCellFeeAmount + rushAmount - discountAmount;
    const taxAmount = taxableAmount * taxRate;
    return taxableAmount + taxAmount;
}

// ──────────────────────────────────────────
// WIZARD NAVIGATION
// ──────────────────────────────────────────
function nextStep() {
    const step = state.wizard.currentStep;
    const validators = [null, saveStep1, saveStep2, saveStep3, saveStep4, null];

    if (step === 5) {
        // Create invoice
        createInvoice();
        return;
    }

    if (validators[step] && !validators[step]()) {
        showToast('Please fill in all required fields', 'error');
        return;
    }

    state.wizard.currentStep = Math.min(5, step + 1);
    renderWizardStep();
}

function prevStep() {
    const step = state.wizard.currentStep;
    // save current state silently
    if (step === 4) saveStep4();
    state.wizard.currentStep = Math.max(1, step - 1);
    renderWizardStep();
}

function createInvoice() {
    const data = state.wizard.data;
    const client = getClientById(data.clientId);
    const total = calcTotal(data);

    const invoice = {
        id: generateInvoiceNumber(),
        client: client,
        projectName: data.projectName,
        cells: [...data.selectedCells],
        amount: total,
        status: 'draft',
        date: new Date().toISOString().split('T')[0],
        teamEntries: data.teamEntries.filter(e => e.employeeId && e.hours > 0).map(e => ({...e})),
        wizardData: {...data},
    };

    state.invoices.unshift(invoice);
    showToast(`Invoice ${invoice.id} created successfully!`, 'success');
    navigateTo('dashboard');
    renderDashboard();
}
