/* ======================================================================
   RDS — Multi-Cell Invoice Wizard Application
   ====================================================================== */

// ──────────────────────────────────────────
// DATA MODEL
// ──────────────────────────────────────────
const CELLS = [
    { id: 'AM', name: 'AM', fullName: 'Amsterdam',        employees: 18, color: '#3b82f6' },
    { id: 'AT', name: 'AT', fullName: 'Athens',           employees: 14, color: '#8E7CC3' },
    { id: 'BA', name: 'BA', fullName: 'Baar',             employees: 22, color: '#22c55e' },
    { id: 'DO', name: 'DO', fullName: 'Dornbirn',         employees: 12, color: '#ec4899' },
    { id: 'DU', name: 'DU', fullName: 'Dusseldorf',       employees: 20, color: '#f97316' },
    { id: 'FE', name: 'FE', fullName: 'Feldkirch',        employees: 10, color: '#14b8a6' },
    { id: 'FF', name: 'FF', fullName: 'Frankfurt',        employees: 28, color: '#2AA294' },
    { id: 'HD', name: 'HD', fullName: 'Heidelberg',       employees: 16, color: '#f59e0b' },
    { id: 'MU', name: 'MU', fullName: 'Munich',           employees: 32, color: '#ef4444' },
    { id: 'RB', name: 'RB', fullName: 'Regensburg',       employees: 12, color: '#4DB6AC' },
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
    { id: 'e2',  name: 'Bob Thompson',       cell: 'AM', seniority: 'mid',       avatar: '#2AA294' },
    // AT — Athens
    { id: 'e3',  name: 'Nikos Papadopoulos', cell: 'AT', seniority: 'senior',    avatar: '#8E7CC3' },
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
    { id: 'e11', name: 'Andreas Moser',      cell: 'FE', seniority: 'senior',    avatar: '#1F7A6E' },
    { id: 'e12', name: 'Maria Gruber',       cell: 'FE', seniority: 'mid',       avatar: '#14b8a6' },
    // FF — Frankfurt
    { id: 'e13', name: 'Hans Schmidt',       cell: 'FF', seniority: 'principal', avatar: '#2AA294' },
    { id: 'e14', name: 'Ines Braun',         cell: 'FF', seniority: 'senior',    avatar: '#f59e0b' },
    { id: 'e15', name: 'Jan Fischer',        cell: 'FF', seniority: 'mid',       avatar: '#22c55e' },
    // HD — Heidelberg
    { id: 'e16', name: 'Klaus Wagner',       cell: 'HD', seniority: 'senior',    avatar: '#8E7CC3' },
    { id: 'e17', name: 'Laura Beck',         cell: 'HD', seniority: 'junior',    avatar: '#ec4899' },
    // MU — Munich
    { id: 'e18', name: 'Maximilian Huber',   cell: 'MU', seniority: 'principal', avatar: '#ef4444' },
    { id: 'e19', name: 'Franziska Weber',    cell: 'MU', seniority: 'senior',    avatar: '#4DB6AC' },
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
    { id: 'e28', name: 'Tobias Roth',        cell: 'ST', seniority: 'mid',       avatar: '#8E7CC3' },
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
        // Step 1: Account and Invoice Information
        projectCode: 'PRJ-2024-0847',
        invoiceToCustomer: 'INV-2024-1203',
        timeSpanStart: '2024-01-01',
        timeSpanEnd: '2024-01-31',
        invoicingCell: 'ZU',
        projectManager: 'Daniel Stadelmann',
        bookingDate: '2024-02-05',
        bookingName: 'Daniel Stadelmann',
        linkToContract: 'https://docs.company.com/contracts/acme-2024',
        linkToCustomerInvoice: 'https://docs.company.com/invoices/inv-2024-1203',
        // Financial fields
        currency: 'CHF',
        monthlyExchangeRate: 0.95,
        totalAmountInvoiced: 125000,        // (A)
        expensesOutsideVAT: 2500,
        invoiceToCustomerInklVAT: 135125,
        vatPercent: 8.1,
        vatAmount: 10125,                   // (I)
        invoiceToCustomerNET: 125000,
        expensesTravelMaterial: 3500,      // (H)
        // 3rd Party Services (G)
        thirdPartyServices: [
            { currency: 'CHF', amount: 8500, providerName: 'CloudHost AG' },
        ],
        reimbursementsSkonto: 1250,        // (F)
        invoiceRevenueForFee: 107550,        // Calculated
        // Step 4: Sharing Key - Fee Distribution
        sharingKey: {
            salesFee:        { entries: [{ cell: 'ZU', percent: 10 }] },
            accountOwnerFee: { entries: [{ cell: 'ZU', percent: 4  }] },
            groupServicesFee:{ entries: [{ cell: 'ZU', percent: 3  }] },
            cellServices:    { entries: [{ cell: 'ZU', percent: 100}] },
        },
        // Legacy
        selectedCells: ['ZU', 'BA', 'MU', 'VI'],
        teamEntries: [
            { employeeId: 'e35', hours: 45 },  // Marc Dupont (ZU)
            { employeeId: 'e36', hours: 32 },  // Leonie Fischer (ZU)
            { employeeId: 'e5', hours: 28 },   // Lukas Wagner (BA)
            { employeeId: 'e6', hours: 20 },   // Emilia Graf (BA)
            { employeeId: 'e18', hours: 35 },  // Maximilian Huber (MU)
            { employeeId: 'e32', hours: 25 },  // Erik Müller (VI)
        ],
        applyTax: true,
        taxCell: 'ZU',
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

    // Sidebar toggle
    initSidebarToggle();

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
// SIDEBAR TOGGLE
// ──────────────────────────────────────────
function initSidebarToggle() {
    const sidebar = document.querySelector('.sidebar');
    const btn = $('#sidebar-toggle');
    if (!sidebar || !btn) return;

    if (localStorage.getItem('sidebar-collapsed') === 'true') {
        sidebar.classList.add('collapsed');
    }

    btn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        localStorage.setItem('sidebar-collapsed', sidebar.classList.contains('collapsed'));
    });
}

// ──────────────────────────────────────────
// MODE SWITCHER (Dark / Light)
// ──────────────────────────────────────────
function initModeSwitcher() {
    const saved = localStorage.getItem('invoicehub-theme');
    if (saved === 'dark') {
        document.body.classList.add('dark');
        $('#mode-dark').classList.add('active');
        $('#mode-light').classList.remove('active');
    } else {
        // Light is the default
        document.body.classList.remove('dark');
        $('#mode-light').classList.add('active');
        $('#mode-dark').classList.remove('active');
    }

    $$('.mode-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            $$('.mode-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            if (mode === 'dark') {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
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
                    <h3>Project Details</h3>
                    <div class="review-row"><span class="label">Customer</span><span class="value">${inv.client.name}</span></div>
                    <div class="review-row"><span class="label">Contact</span><span class="value">${inv.client.contact}</span></div>
                    <div class="review-row"><span class="label">Date</span><span class="value">${new Date(inv.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
                    <div class="review-row"><span class="label">Cells Involved</span><span class="value">
                        <div class="cell-badges">${inv.cells.map(c => `<span class="cell-badge ${c.toLowerCase()}">${c}</span>`).join('')}</div>
                    </span></div>
                </div>
                <div class="detail-section">
                    <h3>Team Breakdown</h3>
                    <table class="review-team-table">
                        <thead><tr><th>Employee</th><th>Cell</th><th>Seniority</th><th>Hours</th><th>Rate</th><th>Subtotal</th></tr></thead>
                        <tbody>${teamRows || '<tr><td colspan="6" style="text-align:center;color:var(--text-tertiary);">No team data available</td></tr>'}</tbody>
                    </table>
                </div>
            </div>
            <div>
                <div class="summary-card">
                    <h3>Invoice Total</h3>
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

    // Update progress bar (now 5 steps)
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
        $('#btn-next').classList.add('btn-accent');
    } else {
        $('#btn-next').innerHTML = `Next <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        $('#btn-next').classList.remove('btn-accent');
        $('#btn-next').classList.add('btn-primary');
    }

    const container = $('#wizard-content');
    // Step 1: Account & Invoice, Step 2: Cell Selection, Step 3: Team & Hours, Step 4: Sharing Key, Step 5: Summary
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

// ─── STEP 1: Account and Invoice Information ───
function renderStep1(container, data) {
    const today = new Date().toISOString().split('T')[0];
    const selectedInvCell = CELLS.find(c => c.id === data.invoicingCell);

    // Currency & VAT options
    const currencyOptions = ['CHF', 'EUR', 'USD', 'GBP'];
    const vatOptions = [
        { value: 8.1, label: '8.1%' },
        { value: 7.7, label: '7.7%' },
        { value: 19, label: '19%' },
        { value: 20, label: '20%' },
        { value: 21, label: '21%' },
        { value: 0, label: '0%' },
    ];

    // Compute derived financial values
    const inklVAT = (data.totalAmountInvoiced || 0) - (data.expensesOutsideVAT || 0);
    const vatPct = data.vatPercent || 0;
    const vatAmount = inklVAT * vatPct / (100 + vatPct);
    const net = inklVAT - vatAmount;
    const invoiceRevenue = net - (data.expensesTravelMaterial || 0) - (data.reimbursementsSkonto || 0);

    // Sync back to data
    data.invoiceToCustomerInklVAT = inklVAT;
    data.vatAmount = vatAmount;
    data.invoiceToCustomerNET = net;
    data.invoiceRevenueForFee = invoiceRevenue;

    container.innerHTML = `
        <div class="wizard-step">
            <h2>Account and Invoice Information</h2>
            <p class="step-desc">Enter the project and invoice details.</p>
            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">Project Code <span class="required">*</span></label>
                    <input type="text" class="form-input" id="w-project-code" placeholder="e.g. ABCDXYZ" value="${data.projectCode || ''}">
                    <span class="form-error">Project code is required</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Invoice # to Customer <span class="required">*</span></label>
                    <input type="text" class="form-input" id="w-invoice-to-customer" placeholder="e.g. R002005" value="${data.invoiceToCustomer || ''}">
                    <span class="form-error">Invoice number is required</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Time Span Start <span class="required">*</span></label>
                    <input type="date" class="form-input" id="w-time-span-start" value="${data.timeSpanStart || today}">
                </div>
                <div class="form-group">
                    <label class="form-label">Time Span End <span class="required">*</span></label>
                    <input type="date" class="form-input" id="w-time-span-end" value="${data.timeSpanEnd || ''}">
                </div>
                <div class="form-group">
                    <label class="form-label">Invoicing Cell <span class="required">*</span></label>
                    ${ssHTML('ss-invoicing-cell', 'Select a cell...', selectedInvCell ? selectedInvCell.name + ' — ' + selectedInvCell.fullName : '')}
                    <span class="form-error">Please select an invoicing cell</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Project Manager <span class="required">*</span></label>
                    <input type="text" class="form-input" id="w-project-manager" placeholder="Enter name" value="${data.projectManager || ''}">
                    <span class="form-error">Project manager is required</span>
                </div>
                <div class="form-group">
                    <label class="form-label">Booking Date <span class="required">*</span></label>
                    <input type="date" class="form-input" id="w-booking-date" value="${data.bookingDate || today}">
                </div>
                <div class="form-group">
                    <label class="form-label">Booking Name <span class="required">*</span></label>
                    <input type="text" class="form-input" id="w-booking-name" placeholder="Enter name" value="${data.bookingName || ''}">
                    <span class="form-error">Booking name is required</span>
                </div>
            </div>

            <h2 style="margin-top: 40px;">Total Amount Invoiced to Customer</h2>
            <p class="step-desc">Enter the total amount billed to the customer for this invoice.</p>

            <div class="cell-section">
                <div class="cell-section-header">
                    <h3>Invoice Total <span class="rate-display" style="margin-left: 8px;">${formatCurrency(data.totalAmountInvoiced || 0, data.currency || 'CHF')}</span></h3>
                </div>
                <div class="cell-section-body">
                    <div class="total-invoice-row">
                        <div class="form-group" style="margin:0; max-width: 220px;">
                            <label class="form-label">Amount (${data.currency || 'CHF'})</label>
                            <input type="number" class="form-input" id="w-total-amount" step="0.01" min="0" value="${data.totalAmountInvoiced || 0}" placeholder="0.00">
                        </div>
                    </div>
                </div>
            </div>

            <div class="cell-section">
                <div class="cell-section-header">
                    <h3>3rd Party Services</h3>
                </div>
                <div class="cell-section-body">
                    <div class="third-party-services">
                        ${data.thirdPartyServices.map((svc, idx) => `
                            <div class="third-party-row">
                                <span class="third-party-label">Provider ${idx + 1}</span>
                                <input type="text" class="form-input third-party-name" data-idx="${idx}" value="${svc.providerName || ''}" placeholder="Provider Name">
                                <input type="number" class="form-input third-party-amount" data-idx="${idx}" step="0.01" min="0" value="${svc.amount || 0}" placeholder="0.00">
                                <select class="form-select third-party-currency" data-idx="${idx}">
                                    ${currencyOptions.map(c => `<option value="${c}" ${svc.currency === c ? 'selected' : ''}>${c}</option>`).join('')}
                                </select>
                                <button class="btn-remove-row third-party-delete" data-idx="${idx}" title="Remove">
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 3l10 10M13 3L3 13"/></svg>
                                </button>
                            </div>
                        `).join('')}
                    </div>
                    <div class="add-employee-row">
                        <button class="btn-add-employee" id="add-third-party">
                            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v10M3 8h10"/></svg>
                            Add provider
                        </button>
                    </div>
                </div>
            </div>

            <div class="cell-section">
                <div class="cell-section-header">
                    <h3>Financial Details</h3>
                </div>
                <div class="cell-section-body">
                    <div class="form-grid">
                        <div class="form-group">
                            <label class="form-label">Currency / Monthly Exchange Rate</label>
                            <select class="form-select" id="w-currency">
                                ${currencyOptions.map(c => `<option value="${c}" ${data.currency === c ? 'selected' : ''}>${c}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Expenses outside VAT</label>
                            <input type="number" class="form-input" id="w-expenses-outside-vat" step="0.01" min="0" value="${data.expensesOutsideVAT || 0}">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Value Added Tax, VAT, in %</label>
                            <select class="form-select" id="w-vat-percent">
                                ${vatOptions.map(v => `<option value="${v.value}" ${data.vatPercent === v.value ? 'selected' : ''}>${v.label}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Invoice to Customer inkl. VAT</label>
                            <span class="form-input form-input--readonly" id="w-invoice-inkl-vat">${formatCurrency(data.invoiceToCustomerInklVAT || 0, '')}</span>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Value Added Tax, VAT, Amount (I)</label>
                            <span class="form-input form-input--readonly" id="w-vat-amount">${formatCurrency(data.vatAmount || 0, '')}</span>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Invoice to Customer NET</label>
                            <span class="form-input form-input--readonly" id="w-invoice-net">${formatCurrency(data.invoiceToCustomerNET || 0, '')}</span>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Expenses, Travel + Material, excl. Time (H)</label>
                            <input type="number" class="form-input" id="w-expenses-travel" step="0.01" min="0" value="${data.expensesTravelMaterial || 0}">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Reimbursements, Skonto (F)</label>
                            <input type="number" class="form-input" id="w-reimbursements" step="0.01" value="${data.reimbursementsSkonto || 0}">
                        </div>
                    </div>
                    <div class="financial-revenue-row">
                        <span class="financial-revenue-label">Invoice Revenue for Fee Calculation</span>
                        <span class="financial-revenue-value" id="w-invoice-revenue">${formatCurrency(invoiceRevenue, data.currency || 'CHF')}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Initialize Invoicing Cell searchable select
    initSearchableSelect('ss-invoicing-cell', CELLS.map(c => ({
        id: c.id, label: c.name + ' — ' + c.fullName, group: 'Cells',
    })), data.invoicingCell, (val) => {
        data.invoicingCell = val;
        renderStep1(container, data);
    });

    // Recalculate all derived financial fields in real time
    function recalcAll() {
        const total = parseFloat($('#w-total-amount')?.value) || 0;
        const expOutVAT = parseFloat($('#w-expenses-outside-vat')?.value) || 0;
        const vatPct = parseFloat($('#w-vat-percent')?.value) || 0;
        const travel = parseFloat($('#w-expenses-travel')?.value) || 0;
        const reimb = parseFloat($('#w-reimbursements')?.value) || 0;
        const cur = data.currency || 'CHF';

        const inklVAT = total - expOutVAT;
        const vatAmount = inklVAT * vatPct / (100 + vatPct);
        const net = inklVAT - vatAmount;
        const revenue = net - travel - reimb;

        // Update data model
        data.totalAmountInvoiced = total;
        data.invoiceToCustomerInklVAT = inklVAT;
        data.vatAmount = vatAmount;
        data.invoiceToCustomerNET = net;
        data.invoiceRevenueForFee = revenue;

        // Update readonly displays
        const fmt = (v) => formatCurrency(v, '');
        const elInkl = container.querySelector('#w-invoice-inkl-vat');
        const elVat = container.querySelector('#w-vat-amount');
        const elNet = container.querySelector('#w-invoice-net');
        const elRev = container.querySelector('#w-invoice-revenue');
        const elHeader = container.querySelector('.cell-section-header .rate-display');
        if (elInkl) elInkl.textContent = fmt(inklVAT);
        if (elVat) elVat.textContent = fmt(vatAmount);
        if (elNet) elNet.textContent = fmt(net);
        if (elRev) elRev.textContent = formatCurrency(revenue, cur);
        if (elHeader) elHeader.textContent = formatCurrency(total, cur);
    }

    // Bind all editable financial inputs
    ['w-total-amount', 'w-expenses-outside-vat', 'w-expenses-travel', 'w-reimbursements'].forEach(id => {
        const el = container.querySelector(`#${id}`);
        if (el) el.addEventListener('input', recalcAll);
    });
    const vatSel = container.querySelector('#w-vat-percent');
    if (vatSel) vatSel.addEventListener('change', recalcAll);

    // Bind 3rd party service inputs
    container.querySelectorAll('.third-party-currency').forEach(sel => {
        sel.addEventListener('change', (e) => {
            const idx = parseInt(e.target.dataset.idx);
            data.thirdPartyServices[idx].currency = e.target.value;
        });
    });
    container.querySelectorAll('.third-party-amount').forEach(inp => {
        inp.addEventListener('input', (e) => {
            const idx = parseInt(e.target.dataset.idx);
            data.thirdPartyServices[idx].amount = parseFloat(e.target.value) || 0;
        });
    });
    container.querySelectorAll('.third-party-name').forEach(inp => {
        inp.addEventListener('input', (e) => {
            const idx = parseInt(e.target.dataset.idx);
            data.thirdPartyServices[idx].providerName = e.target.value;
        });
    });

    // Add provider button
    const addBtn = container.querySelector('#add-third-party');
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            data.thirdPartyServices.push({ currency: 'CHF', amount: 0, providerName: '' });
            renderStep1(container, data);
        });
    }

    // Delete provider buttons
    container.querySelectorAll('.third-party-delete').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const idx = parseInt(e.currentTarget.dataset.idx);
            data.thirdPartyServices.splice(idx, 1);
            renderStep1(container, data);
        });
    });
}

function saveStep1() {
    const d = state.wizard.data;

    // Save all form fields
    d.projectCode = $('#w-project-code')?.value.trim() || '';
    d.invoiceToCustomer = $('#w-invoice-to-customer')?.value.trim() || '';
    d.timeSpanStart = $('#w-time-span-start')?.value || '';
    d.timeSpanEnd = $('#w-time-span-end')?.value || '';
    // invoicingCell is set via searchable select callback
    d.projectManager = $('#w-project-manager')?.value.trim() || '';
    d.bookingDate = $('#w-booking-date')?.value || '';
    d.bookingName = $('#w-booking-name')?.value.trim() || '';
    d.linkToContract = $('#w-link-contract')?.value.trim() || '';
    d.linkToCustomerInvoice = $('#w-link-invoice')?.value.trim() || '';

    // Financial fields (editable inputs)
    d.currency = $('#w-currency')?.value || 'CHF';
    d.totalAmountInvoiced = parseFloat($('#w-total-amount')?.value) || 0;
    d.expensesOutsideVAT = parseFloat($('#w-expenses-outside-vat')?.value) || 0;
    d.vatPercent = parseFloat($('#w-vat-percent')?.value) || 8.1;
    d.expensesTravelMaterial = parseFloat($('#w-expenses-travel')?.value) || 0;
    d.reimbursementsSkonto = parseFloat($('#w-reimbursements')?.value) || 0;

    // Computed readonly fields — recalculate from editable inputs (these are <span> elements, not inputs)
    const inklVAT = d.totalAmountInvoiced - d.expensesOutsideVAT;
    const vatAmt = inklVAT * d.vatPercent / (100 + d.vatPercent);
    const netVal = inklVAT - vatAmt;
    d.invoiceToCustomerInklVAT = inklVAT;
    d.vatAmount = vatAmt;
    d.invoiceToCustomerNET = netVal;
    d.invoiceRevenueForFee = netVal - d.expensesTravelMaterial - d.reimbursementsSkonto;

    // Set selectedCells from invoicingCell for Sharing Key step
    if (d.invoicingCell && !d.selectedCells.includes(d.invoicingCell)) {
        d.selectedCells = [d.invoicingCell];
    }
    // Set tax cell for calculation
    d.taxCell = d.invoicingCell;
    d.applyTax = true;

    let valid = true;
    const requireField = (sel) => {
        const el = $(sel);
        if (el) {
            const group = el.closest('.form-group');
            if (group) group.classList.add('error');
        }
        valid = false;
    };

    if (!d.projectCode) requireField('#w-project-code');
    if (!d.invoiceToCustomer) requireField('#w-invoice-to-customer');
    if (!d.timeSpanStart) requireField('#w-time-span-start');
    if (!d.invoicingCell) requireField('#ss-invoicing-cell');
    if (!d.projectManager) requireField('#w-project-manager');
    if (!d.bookingDate) requireField('#w-booking-date');
    if (!d.bookingName) requireField('#w-booking-name');

    return valid;
}

// ─── STEP 2: Cell Selection ───
function renderStep2(container, data) {
    if (!data.selectedCells) data.selectedCells = [];

    function cellCardHTML(cell) {
        const selected = data.selectedCells.includes(cell.id);
        const taxRate = TAX_RATES[cell.id] || 0;
        return `
            <div class="cs-cell-card ${selected ? 'selected' : ''}" data-cell-id="${cell.id}" style="--cell-color:${cell.color};">
                <div class="cs-cell-card-top">
                    <span class="cs-cell-code">${cell.name}</span>
                    <div class="cs-cell-check ${selected ? 'checked' : ''}">
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                            <path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="cs-cell-name">${cell.fullName}</div>
                <div class="cs-cell-details">
                    <span class="cs-cell-detail">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 2a4 4 0 100 8A4 4 0 008 2zM2 14c0-2.5 2.686-4 6-4s6 1.5 6 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
                        ${cell.employees} employees
                    </span>
                    <span class="cs-cell-detail">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 1a5 5 0 00-5 5c0 3.5 5 9 5 9s5-5.5 5-9a5 5 0 00-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" fill="currentColor" opacity=".9"/></svg>
                        VAT ${(taxRate * 100).toFixed(1)}%
                    </span>
                </div>
            </div>
        `;
    }

    function footerHTML() {
        const n = data.selectedCells.length;
        return n === 0
            ? `<span class="cs-footer-hint">No subsidiaries selected yet</span>`
            : `<span class="cs-footer-selected"><strong>${n}</strong> subsidiar${n > 1 ? 'ies' : 'y'} selected: ${data.selectedCells.join(', ')}</span>`;
    }

    container.innerHTML = `
        <div class="wizard-step">
            <h2>Cell Selection</h2>
            <p class="step-desc">Select the subsidiaries involved in this invoice.</p>
            <div class="cs-grid">
                ${CELLS.map(cellCardHTML).join('')}
            </div>
            <div class="cs-footer" id="cs-footer">${footerHTML()}</div>
        </div>
    `;

    function refresh() {
        container.querySelectorAll('.cs-cell-card').forEach(card => {
            const id = card.dataset.cellId;
            const sel = data.selectedCells.includes(id);
            card.classList.toggle('selected', sel);
            card.querySelector('.cs-cell-check').classList.toggle('checked', sel);
        });
        document.getElementById('cs-footer').innerHTML = footerHTML();
    }

    container.querySelectorAll('.cs-cell-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.dataset.cellId;
            if (data.selectedCells.includes(id)) {
                data.selectedCells = data.selectedCells.filter(c => c !== id);
            } else {
                data.selectedCells = [...data.selectedCells, id];
            }
            refresh();
        });
    });
}

function saveStep2() {
    if (!state.wizard.data.selectedCells || state.wizard.data.selectedCells.length === 0) {
        showToast('Please select at least one cell', 'error');
        return false;
    }
    return true;
}

// ─── STEP 3: Team & Hours ───
function renderStep3(container, data) {
    if (!data.teamEntries) data.teamEntries = [];
    if (!data.selectedCells || data.selectedCells.length === 0) {
        container.innerHTML = `<div class="wizard-step"><h2>Team & Hours</h2><p class="step-desc">No cells selected. Please go back and select cells first.</p></div>`;
        return;
    }

    // teamEntries: [{ cellId, employeeId, hours }]
    // Migrate legacy format (no cellId)
    data.teamEntries = data.teamEntries
        .filter(e => data.selectedCells.includes(e.cellId || (EMPLOYEES_DB.find(em => em.id === e.employeeId) || {}).cell))
        .map(e => {
            if (!e.cellId) {
                const emp = EMPLOYEES_DB.find(em => em.id === e.employeeId);
                return { cellId: emp ? emp.cell : null, employeeId: e.employeeId, hours: e.hours || 0 };
            }
            return e;
        })
        .filter(e => e.cellId);

    const senLabels = { junior: 'Junior', mid: 'Mid-Level', senior: 'Senior', principal: 'Principal' };

    function fmt(n) { return n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

    function cellEntries(cellId) {
        return data.teamEntries.filter(e => e.cellId === cellId);
    }

    // Ensure each entry has a rate pre-filled from seniority if not set
    data.teamEntries.forEach(entry => {
        if (entry.rate == null) {
            const emp = EMPLOYEES_DB.find(e => e.id === entry.employeeId);
            const rc = CELL_RATE_CARDS[entry.cellId];
            entry.rate = emp && rc ? (rc.rates[emp.seniority] || 0) : 0;
        }
    });

    function calcEntrySubtotal(entry) {
        return (entry.rate || 0) * (entry.hours || 0);
    }

    function calcCellTotal(cellId) {
        return cellEntries(cellId).reduce((s, e) => s + calcEntrySubtotal(e), 0);
    }

    function calcCellHours(cellId) {
        return cellEntries(cellId).reduce((s, e) => s + (e.hours || 0), 0);
    }

    function totalHours() {
        return data.teamEntries.reduce((s, e) => s + (e.hours || 0), 0);
    }

    const SEN_LABELS = { junior: 'Junior', mid: 'Mid-Level', senior: 'Senior', principal: 'Principal' };

    const DISPLAY_AS_OPTIONS = [
        'Account Management',
        'Project Management',
        'Strategy & Consulting',
        'Software Development',
        'Design & UX',
        'Data Analysis',
        'Marketing',
        'Legal & Compliance',
        'Finance & Controlling',
        'Operations',
    ];

    // Pre-fill displayAs for entries that don't have it
    data.teamEntries.forEach(entry => {
        if (!entry.displayAs) entry.displayAs = 'name';
    });

    function empOptionsForCell(cellId, selectedEmpId) {
        const emps = EMPLOYEES_DB.filter(e => e.cell === cellId);
        return emps.map(e =>
            `<option value="${e.id}" ${e.id === selectedEmpId ? 'selected' : ''}>${e.name}</option>`
        ).join('');
    }

    function serviceOptionsHTML(selected) {
        return DISPLAY_AS_OPTIONS.map(s =>
            `<option value="${s}" ${selected === s ? 'selected' : ''}>${s}</option>`
        ).join('');
    }

    function entryRowHTML(entry, entryIdx) {
        const emp = EMPLOYEES_DB.find(e => e.id === entry.employeeId);
        const rc = CELL_RATE_CARDS[entry.cellId];
        const symbol = rc ? rc.symbol : 'CHF';
        const subtotal = calcEntrySubtotal(entry);
        const initials = emp ? emp.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase() : '?';
        const senLabel = emp ? (SEN_LABELS[emp.seniority] || emp.seniority) : '';
        const isService = entry.displayAs && entry.displayAs !== 'name';
        const serviceVal = isService ? entry.displayAs : '';
        const serviceDropdown = isService ? `
            <select class="form-select th-service-select" data-entry-idx="${entryIdx}">
                ${serviceOptionsHTML(serviceVal)}
            </select>` : '';
        return `
            <div class="th-emp-row" data-entry-idx="${entryIdx}">
                <div class="th-emp-identity">
                    <div class="th-emp-avatar" style="background:#E5E7EB;color:#6B7280;">${initials}</div>
                    <div class="th-emp-name-block">
                        <select class="form-select th-emp-select" data-entry-idx="${entryIdx}">
                            ${empOptionsForCell(entry.cellId, entry.employeeId)}
                        </select>
                        <span class="th-emp-meta">${entry.cellId} · ${senLabel}</span>
                    </div>
                </div>
                <div class="th-display-col">
                    <select class="form-select th-display-select" data-entry-idx="${entryIdx}">
                        <option value="name" ${!isService ? 'selected' : ''}>Display on invoice: Name</option>
                        <option value="service" ${isService ? 'selected' : ''}>Display on invoice: Service</option>
                    </select>
                    ${serviceDropdown}
                </div>
                <div class="th-input-wrap">
                    <input type="number" class="form-input th-rate-input" data-entry-idx="${entryIdx}" min="0" step="1" value="${entry.rate || 0}">
                    <span class="th-input-suffix">${symbol}</span>
                </div>
                <div class="th-input-wrap">
                    <input type="number" class="form-input th-hours-input" data-entry-idx="${entryIdx}" min="0" step="0.5" value="${entry.hours || 0}" placeholder="0">
                    <span class="th-input-suffix">hr</span>
                </div>
                <span class="th-emp-subtotal">${symbol} ${fmt(subtotal)}</span>
                <button class="th-remove-btn" data-entry-idx="${entryIdx}" title="Remove">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M3 3l10 10M13 3L3 13"/></svg>
                </button>
            </div>`;
    }

    function cellBlockHTML(cellId) {
        const cell = CELLS.find(c => c.id === cellId);
        const rc = CELL_RATE_CARDS[cellId];
        const symbol = rc ? rc.symbol : 'CHF';
        const entries = cellEntries(cellId);
        const cellTotal = calcCellTotal(cellId);
        const rows = entries.map(e => entryRowHTML(e, data.teamEntries.indexOf(e))).join('');
        return `
            <div class="th-cell-block" data-cell-id="${cellId}">
                <div class="th-cell-header">
                    <span class="cell-badge mu">${cellId}</span>
                    <span class="th-cell-name">${cell ? cell.fullName : cellId}</span>
                    <span class="th-cell-total">${symbol} <span class="th-cell-total-val" data-cell-id="${cellId}">${fmt(cellTotal)}</span></span>
                </div>
                <div class="th-entries">${rows}</div>
                <div class="th-add-row">
                    <button class="btn-add-employee th-add-entry" data-cell-id="${cellId}">
                        + Add Employee from ${cellId}
                    </button>
                </div>
            </div>`;
    }

    function summaryHTML() {
        const cur = data.currency || 'CHF';
        const grandTotal = data.selectedCells.reduce((s, id) => s + calcCellTotal(id), 0);
        const cellRows = data.selectedCells.map(cellId => {
            const cell = CELLS.find(c => c.id === cellId);
            const rc = CELL_RATE_CARDS[cellId];
            const sub = calcCellTotal(cellId);
            const hrs = calcCellHours(cellId);
            return `
                <div class="th-summary-row">
                    <span class="th-summary-cell-name" style="color:${cell ? cell.color : 'inherit'}">${cellId}</span>
                    <span class="th-summary-hrs">${hrs}h</span>
                    <span class="th-summary-amount">${rc ? rc.symbol : ''}${fmt(sub)}</span>
                </div>`;
        }).join('');
        return `
            <div class="th-summary-total-hours">
                <span class="th-summary-label">Total Hours</span>
                <span class="th-summary-value">${totalHours()}h</span>
            </div>
            <div class="th-summary-rows">${cellRows}</div>
            <div class="th-summary-grand">
                <span>Subtotal</span>
                <span>${formatCurrency(grandTotal, cur)}</span>
            </div>`;
    }

    function render() {
        container.innerHTML = `
            <div class="wizard-step">
                <h2>Assign Team Members & Hours</h2>
                <p class="step-desc">Select employees from each participating cell and enter their billable hours. Employees from different cells work together on this project.</p>
                <div class="th-layout">
                    <div class="th-blocks">
                        ${data.selectedCells.map(cellBlockHTML).join('')}
                    </div>
                    <div class="th-summary-panel">
                        <div class="th-summary-header">Hours Summary</div>
                        <div class="th-summary-body">${summaryHTML()}</div>
                    </div>
                </div>
            </div>
        `;
        bindEvents();
    }

    function bindEvents() {
        // Add entry per cell
        container.querySelectorAll('.th-add-entry').forEach(btn => {
            btn.addEventListener('click', () => {
                const cellId = btn.dataset.cellId;
                const firstEmp = EMPLOYEES_DB.find(e => e.cell === cellId);
                if (firstEmp) {
                    const rc = CELL_RATE_CARDS[cellId];
                    const rate = rc ? (rc.rates[firstEmp.seniority] || 0) : 0;
                    data.teamEntries.push({ cellId, employeeId: firstEmp.id, hours: 1, rate, displayAs: 'name' });
                    render();
                }
            });
        });

        // Remove entry
        container.querySelectorAll('.th-remove-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.dataset.entryIdx);
                data.teamEntries.splice(idx, 1);
                render();
            });
        });

        // Employee select
        container.querySelectorAll('.th-emp-select').forEach(sel => {
            sel.addEventListener('change', () => {
                const idx = parseInt(sel.dataset.entryIdx);
                const entry = data.teamEntries[idx];
                const emp = EMPLOYEES_DB.find(e => e.id === sel.value);
                entry.employeeId = sel.value;
                if (emp) {
                    const rc = CELL_RATE_CARDS[entry.cellId];
                    entry.rate = rc ? (rc.rates[emp.seniority] || 0) : 0;
                }
                render();
            });
        });

        // Display mode select
        container.querySelectorAll('.th-display-select').forEach(sel => {
            sel.addEventListener('change', () => {
                const entry = data.teamEntries[parseInt(sel.dataset.entryIdx)];
                entry.displayAs = sel.value === 'service' ? DISPLAY_AS_OPTIONS[0] : 'name';
                render();
            });
        });

        // Service label select
        container.querySelectorAll('.th-service-select').forEach(sel => {
            sel.addEventListener('change', () => {
                data.teamEntries[parseInt(sel.dataset.entryIdx)].displayAs = sel.value;
            });
        });

        // Rate input — live update subtotal + cell total + summary
        container.querySelectorAll('.th-rate-input').forEach(inp => {
            inp.addEventListener('input', () => {
                const idx = parseInt(inp.dataset.entryIdx);
                const entry = data.teamEntries[idx];
                entry.rate = parseFloat(inp.value) || 0;
                const rc = CELL_RATE_CARDS[entry.cellId];
                const symbol = rc ? rc.symbol : 'CHF';
                const row = inp.closest('.th-emp-row');
                row.querySelector('.th-emp-subtotal').textContent = `${symbol} ${fmt(calcEntrySubtotal(entry))}`;
                const block = inp.closest('.th-cell-block');
                block.querySelector('.th-cell-total-val').textContent = fmt(calcCellTotal(entry.cellId));
                container.querySelector('.th-summary-body').innerHTML = summaryHTML();
            });
        });

        // Hours input — live update subtotal + cell total + summary
        container.querySelectorAll('.th-hours-input').forEach(inp => {
            inp.addEventListener('input', () => {
                const idx = parseInt(inp.dataset.entryIdx);
                const entry = data.teamEntries[idx];
                entry.hours = parseFloat(inp.value) || 0;
                const rc = CELL_RATE_CARDS[entry.cellId];
                const symbol = rc ? rc.symbol : 'CHF';
                const row = inp.closest('.th-emp-row');
                row.querySelector('.th-emp-subtotal').textContent = `${symbol} ${fmt(calcEntrySubtotal(entry))}`;
                const block = inp.closest('.th-cell-block');
                block.querySelector('.th-cell-total-val').textContent = fmt(calcCellTotal(entry.cellId));
                container.querySelector('.th-summary-body').innerHTML = summaryHTML();
            });
        });
    }

    render();
}

function saveStep3() {
    return true;
}

// ─── STEP 4: Sharing Key ───
function renderStep4(container, data) {
    if (!data.sharingKey || !data.sharingKey.salesFee) {
        data.sharingKey = {
            salesFee:        { entries: [{ cell: data.selectedCells?.[0] || 'ZU', percent: 10 }] },
            accountOwnerFee: { entries: [{ cell: data.selectedCells?.[0] || 'ZU', percent: 4  }] },
            groupServicesFee:{ entries: [{ cell: data.selectedCells?.[0] || 'ZU', percent: 3  }] },
            cellServices:    { entries: [{ cell: data.selectedCells?.[0] || 'ZU', percent: 100 }] },
        };
    }
    const sk = data.sharingKey;
    const revenue = data.invoiceRevenueForFee || 0;
    const cur = data.currency || 'CHF';

    const feeTotal = (entries) => entries.reduce((s, e) => s + revenue * (e.percent || 0) / 100, 0);
    const salesFeeValue       = feeTotal(sk.salesFee.entries);
    const accountOwnerFeeValue = feeTotal(sk.accountOwnerFee.entries);
    const groupServicesFeeValue = feeTotal(sk.groupServicesFee.entries);
    const cellServicesTotalAmount = revenue - salesFeeValue - accountOwnerFeeValue - groupServicesFeeValue;

    const cellOpts = (selected) => CELLS.map(c =>
        `<option value="${c.id}" ${c.id === selected ? 'selected' : ''}>${c.id} — ${c.fullName}</option>`
    ).join('');

    const feeEntryRow = (feeKey, entry, idx) => {
        const indValue = revenue * (entry.percent || 0) / 100;
        const canRemove = sk[feeKey].entries.length > 1;
        return `
            <div class="sk-fee-row" data-fee="${feeKey}" data-idx="${idx}">
                <div class="sk-fee-cell-col">
                    <select class="form-select sk-cell-select" data-fee="${feeKey}" data-idx="${idx}">
                        ${cellOpts(entry.cell)}
                    </select>
                </div>
                <div class="sk-fee-pct-col">
                    <input type="number" class="form-input sk-percent-input" data-fee="${feeKey}" data-idx="${idx}" step="0.1" min="0" max="100" value="${entry.percent || 0}">
                    <span class="sk-percent-sign">%</span>
                </div>
                <div class="sk-fee-val-col">
                    <span class="form-input form-input--readonly">${formatCurrency(indValue, cur)}</span>
                </div>
                <div class="sk-fee-action-col">
                    ${canRemove ? `<button class="btn-remove sk-remove-entry" data-fee="${feeKey}" data-idx="${idx}" title="Remove">
                        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h8"/></svg>
                    </button>` : ''}
                </div>
            </div>`;
    };

    const cellServiceRow = (entry, idx) => {
        const indValue = cellServicesTotalAmount * (entry.percent || 0) / 100;
        const canRemove = sk.cellServices.entries.length > 1;
        return `
            <div class="sk-fee-row" data-fee="cellServices" data-idx="${idx}">
                <div class="sk-fee-cell-col">
                    <select class="form-select sk-cell-select" data-fee="cellServices" data-idx="${idx}">
                        ${cellOpts(entry.cell)}
                    </select>
                </div>
                <div class="sk-fee-pct-col">
                    <input type="number" class="form-input sk-percent-input" data-fee="cellServices" data-idx="${idx}" step="0.1" min="0" max="100" value="${entry.percent || 0}">
                    <span class="sk-percent-sign">%</span>
                </div>
                <div class="sk-fee-val-col">
                    <span class="form-input form-input--readonly">${formatCurrency(indValue, cur)}</span>
                </div>
                <div class="sk-fee-action-col">
                    ${canRemove ? `<button class="btn-remove sk-remove-entry" data-fee="cellServices" data-idx="${idx}" title="Remove">
                        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h8"/></svg>
                    </button>` : ''}
                </div>
            </div>`;
    };

    const feeSection = (badge, label, feeKey, value, rows) => `
        <div class="cell-section">
            <div class="cell-section-header">
                <h3><span class="cell-badge mu">${badge}</span> ${label}</h3>
                <span class="sk-share-value">${formatCurrency(value, cur)}</span>
            </div>
            <div class="cell-section-body">
                <div class="sk-fee-grid">
                    <div class="sk-fee-row sk-fee-header-row">
                        <div class="sk-fee-cell-col">Cell</div>
                        <div class="sk-fee-pct-col">Percent</div>
                        <div class="sk-fee-val-col">Ind. Value</div>
                        <div class="sk-fee-action-col"></div>
                    </div>
                    ${rows}
                </div>
                <div class="add-employee-row">
                    <button class="btn-add-employee sk-add-entry" data-fee="${feeKey}">
                        <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 1v12M1 7h12"/></svg>
                        Add cell
                    </button>
                </div>
            </div>
        </div>`;

    container.innerHTML = `
        <div class="wizard-step">
            <h2>Sharing Key</h2>
            <p class="step-desc">Distribute the invoice revenue across cells and fee types.</p>

            <div class="sk-revenue-banner">
                <div class="sk-revenue-left">
                    <span class="sk-revenue-label">Revenue for fee calculation</span>
                    <span class="sk-revenue-value">${formatCurrency(revenue, cur)}</span>
                </div>
            </div>

            ${feeSection('C', 'Sales Fee', 'salesFee', salesFeeValue,
                sk.salesFee.entries.map((e, i) => feeEntryRow('salesFee', e, i)).join(''))}
            ${feeSection('D', 'Account Owner Fee', 'accountOwnerFee', accountOwnerFeeValue,
                sk.accountOwnerFee.entries.map((e, i) => feeEntryRow('accountOwnerFee', e, i)).join(''))}
            ${feeSection('E', 'Group Services Fee', 'groupServicesFee', groupServicesFeeValue,
                sk.groupServicesFee.entries.map((e, i) => feeEntryRow('groupServicesFee', e, i)).join(''))}
            ${feeSection('B', 'Cell Services', 'cellServices', cellServicesTotalAmount,
                sk.cellServices.entries.map((e, i) => cellServiceRow(e, i)).join(''))}
        </div>
    `;

    // Cell select
    container.querySelectorAll('.sk-cell-select').forEach(sel => {
        sel.addEventListener('change', () => {
            const fee = sel.dataset.fee;
            const idx = parseInt(sel.dataset.idx);
            sk[fee].entries[idx].cell = sel.value;
        });
    });

    // Percent input — full re-render so values update
    container.querySelectorAll('.sk-percent-input').forEach(inp => {
        inp.addEventListener('input', () => {
            sk[inp.dataset.fee].entries[parseInt(inp.dataset.idx)].percent = parseFloat(inp.value) || 0;
            renderStep4(container, data);
        });
    });

    // Add entry
    container.querySelectorAll('.sk-add-entry').forEach(btn => {
        btn.addEventListener('click', () => {
            const fee = btn.dataset.fee;
            sk[fee].entries.push({ cell: data.selectedCells?.[0] || 'ZU', percent: 0 });
            renderStep4(container, data);
        });
    });

    // Remove entry
    container.querySelectorAll('.sk-remove-entry').forEach(btn => {
        btn.addEventListener('click', () => {
            const fee = btn.dataset.fee;
            const idx = parseInt(btn.dataset.idx);
            sk[fee].entries.splice(idx, 1);
            renderStep4(container, data);
        });
    });
}

function saveStep4() {
    return true;
}

// ─── (removed old Adjustments step — now handled in Step 4: Sharing Key) ───
function renderStep4_unused(container, data) {
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
                    <h3>Tax Configuration</h3>
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
                    <h3>Discounts</h3>
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
                    <h3>Surcharges</h3>
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
                    <h3>Additional</h3>
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
                <h3>Live Cost Breakdown</h3>
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


// ─── STEP 5: Review ───
function renderStep5(container, data) {
    const cur = data.currency || 'CHF';
    const fmt = (v) => formatCurrency(v, cur);

    // Invoice total breakdown
    const totalInvoice = data.totalAmountInvoiced || 0;
    const thirdPartyTotal = data.thirdPartyServices.reduce((s, svc) => s + (svc.amount || 0), 0);
    const expensesTravel = data.expensesTravelMaterial || 0;
    const revenue = data.invoiceRevenueForFee || 0;
    const expOutVAT = data.expensesOutsideVAT || 0;
    const reimb = data.reimbursementsSkonto || 0;
    const net = data.invoiceToCustomerNET || 0;

    // Fee calculations from sharing key
    const sk = data.sharingKey || {
        salesFee:        { entries: [{ cell: 'ZU', percent: 10 }] },
        accountOwnerFee: { entries: [{ cell: 'ZU', percent: 4  }] },
        groupServicesFee:{ entries: [{ cell: 'ZU', percent: 3  }] },
        cellServices:    { entries: [{ cell: 'ZU', percent: 100}] },
    };
    const feeTot = (entries) => entries.reduce((s, e) => s + revenue * (e.percent || 0) / 100, 0);
    const salesFeePct      = sk.salesFee.entries.reduce((s, e) => s + (e.percent || 0), 0);
    const accountOwnerPct  = sk.accountOwnerFee.entries.reduce((s, e) => s + (e.percent || 0), 0);
    const groupServicesPct = sk.groupServicesFee.entries.reduce((s, e) => s + (e.percent || 0), 0);
    const salesFeeVal      = feeTot(sk.salesFee.entries);
    const accountOwnerVal  = feeTot(sk.accountOwnerFee.entries);
    const groupServicesVal = feeTot(sk.groupServicesFee.entries);
    const cellServicesTotal = revenue - salesFeeVal - accountOwnerVal - groupServicesVal;
    const cellServicesVal  = cellServicesTotal;

    // Proportional widths for the diagram (relative to totalInvoice)
    const total = totalInvoice || 1;
    const pct3rd = (thirdPartyTotal / total * 100);
    const pctExp = ((expensesTravel + reimb) / total * 100);
    const pctRevenue = 100 - pct3rd - pctExp;

    // Fee bands as % of revenue height area
    const revH = revenue || 1;
    const pctGroupFee = groupServicesVal / revH * 100;
    const pctAcctFee = accountOwnerVal / revH * 100;
    const pctSalesFee = salesFeeVal / revH * 100;
    const pctCellArea = 100 - pctGroupFee - pctAcctFee - pctSalesFee;

    // Cell services entries for the bottom blocks
    const cellEntries = sk.cellServices.entries.filter(e => e.cell);
    const cellPctTotal = cellEntries.reduce((s, e) => s + (e.percent || 0), 0) || 1;

    container.innerHTML = `
        <div class="wizard-step">
            <h2>Summary</h2>
            <p class="step-desc">Summary of calculated values to be distributed to the cells.</p>

            <div class="rv-total-label">Invoice Total: <strong>${fmt(totalInvoice)}</strong></div>

            <div class="rv-diagram">
                <!-- Left columns: 3rd parties + expenses -->
                ${pct3rd > 0 ? `
                <div class="rv-col rv-col--side" style="flex: ${pct3rd};">
                    <div class="rv-block rv-block--3rd"
                        data-rv-tooltip='${JSON.stringify({
                            title: "3rd Party Services",
                            total: thirdPartyTotal,
                            rows: data.thirdPartyServices.filter(s => s.amount > 0).length > 1
                                ? data.thirdPartyServices.filter(s => s.amount > 0).map(s => ({ label: s.providerName || "Provider", value: s.amount }))
                                : []
                        })}'>
                        <span class="rv-block-label">3rd parties</span>
                    </div>
                </div>
                ` : ''}

                ${pctExp > 0 ? `
                <div class="rv-col rv-col--side" style="flex: ${pctExp};">
                    <div class="rv-block rv-block--exp"
                        data-rv-tooltip='${JSON.stringify({
                            title: "Expenses",
                            total: expensesTravel + reimb,
                            rows: [
                                ...(expensesTravel > 0 ? [{ label: "Travel & Material", value: expensesTravel }] : []),
                                ...(reimb > 0 ? [{ label: "Reimbursements/Skonto", value: reimb }] : [])
                            ].filter((_, __, arr) => arr.length > 1)
                        })}'>
                        <span class="rv-block-label">expenses</span>
                    </div>
                </div>
                ` : ''}

                <!-- Revenue column (main) -->
                <div class="rv-col rv-col--revenue" style="flex: ${pctRevenue};">
                    <!-- Fee bands at the top -->
                    <div class="rv-fee-band rv-fee-band--group" style="flex: ${pctGroupFee};"
                        data-rv-tooltip='${JSON.stringify({
                            title: "Group Services Fee",
                            total: groupServicesVal,
                            rows: sk.groupServicesFee.entries.length > 1 ? sk.groupServicesFee.entries.map(e => ({ label: e.cell + " (" + e.percent + "%)", value: revenue * e.percent / 100 })) : []
                        })}'>
                        <span class="rv-fee-label">Group Services Fee ${groupServicesPct}%</span>
                    </div>
                    <div class="rv-fee-band rv-fee-band--account" style="flex: ${pctAcctFee};"
                        data-rv-tooltip='${JSON.stringify({
                            title: "Account Owner Fee",
                            total: accountOwnerVal,
                            rows: sk.accountOwnerFee.entries.length > 1 ? sk.accountOwnerFee.entries.map(e => ({ label: e.cell + " (" + e.percent + "%)", value: revenue * e.percent / 100 })) : []
                        })}'>
                        <span class="rv-fee-label">Account Owner Fee ${accountOwnerPct}%</span>
                    </div>
                    <div class="rv-fee-band rv-fee-band--sales" style="flex: ${pctSalesFee};"
                        data-rv-tooltip='${JSON.stringify({
                            title: "Sales Fee",
                            total: salesFeeVal,
                            rows: sk.salesFee.entries.length > 1 ? sk.salesFee.entries.map(e => ({ label: e.cell + " (" + e.percent + "%)", value: revenue * e.percent / 100 })) : []
                        })}'>
                        <span class="rv-fee-label">Sales Fee ${salesFeePct}%</span>
                    </div>

                    <!-- Cell Services area -->
                    <div class="rv-cells-area" style="flex: ${pctCellArea};">
                        ${cellEntries.map(e => {
                            const cellObj = getCellById(e.cell);
                            const entryPct = (e.percent || 0);
                            const entryVal = cellServicesTotal * entryPct / 100;
                            return `
                                <div class="rv-cell-block" style="flex: ${entryPct || 1};"
                                    data-rv-tooltip='${JSON.stringify({ title: (cellObj?.fullName || e.cell), total: entryVal, rows: [] })}'>
                                    <span class="rv-cell-label">${e.cell}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>

            <!-- Legend -->
            <div class="rv-legend">
                <div class="rv-legend-item">
                    <span class="rv-legend-swatch rv-legend-swatch--3rd"></span>
                    <span>3rd Parties</span>
                    <span class="rv-legend-val">${fmt(thirdPartyTotal)}</span>
                </div>
                <div class="rv-legend-item">
                    <span class="rv-legend-swatch rv-legend-swatch--exp"></span>
                    <span>Expenses</span>
                    <span class="rv-legend-val">${fmt(expensesTravel + reimb)}</span>
                </div>
                <div class="rv-legend-item">
                    <span class="rv-legend-swatch rv-legend-swatch--group"></span>
                    <span>Group Services Fee ${groupServicesPct}%</span>
                    <span class="rv-legend-val">${fmt(groupServicesVal)}</span>
                </div>
                <div class="rv-legend-item">
                    <span class="rv-legend-swatch rv-legend-swatch--account"></span>
                    <span>Account Owner Fee ${accountOwnerPct}%</span>
                    <span class="rv-legend-val">${fmt(accountOwnerVal)}</span>
                </div>
                <div class="rv-legend-item">
                    <span class="rv-legend-swatch rv-legend-swatch--sales"></span>
                    <span>Sales Fee ${salesFeePct}%</span>
                    <span class="rv-legend-val">${fmt(salesFeeVal)}</span>
                </div>
                <div class="rv-legend-item">
                    <span class="rv-legend-swatch rv-legend-swatch--cell"></span>
                    <span>Cell Services</span>
                    <span class="rv-legend-val">${fmt(cellServicesVal)}</span>
                </div>
            </div>

            <!-- Financial summary card -->
            <div class="cell-section" style="margin-top: 32px;">
                <div class="cell-section-header">
                    <h3>Financial Summary</h3>
                </div>
                <div class="cell-section-body">
                    <div class="rv-summary-grid">
                        <div class="rv-sum-row"><span>Invoice Total</span><span>${fmt(totalInvoice)}</span></div>
                        <div class="rv-sum-row"><span>Expenses outside VAT</span><span>${fmt(expOutVAT)}</span></div>
                        <div class="rv-sum-row"><span>Invoice to Customer inkl. VAT</span><span>${fmt(data.invoiceToCustomerInklVAT || 0)}</span></div>
                        <div class="rv-sum-row"><span>VAT Amount (${data.vatPercent || 0}%)</span><span>${fmt(data.vatAmount || 0)}</span></div>
                        <div class="rv-sum-row"><span>Invoice to Customer NET</span><span>${fmt(net)}</span></div>
                        <div class="rv-sum-row"><span>Expenses, Travel + Material</span><span>${fmt(expensesTravel)}</span></div>
                        <div class="rv-sum-row"><span>3rd Party Services</span><span>${fmt(thirdPartyTotal)}</span></div>
                        <div class="rv-sum-row"><span>Reimbursements, Skonto</span><span>${fmt(reimb)}</span></div>
                        <div class="rv-sum-row rv-sum-row--highlight"><span>Invoice Revenue for Fee Calculation</span><span>${fmt(revenue)}</span></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Rich JS tooltip for diagram blocks
    let rvTip = document.getElementById('rv-rich-tooltip');
    if (!rvTip) {
        rvTip = document.createElement('div');
        rvTip.id = 'rv-rich-tooltip';
        rvTip.className = 'rv-rich-tooltip';
        document.body.appendChild(rvTip);
    }

    const fmtVal = (v) => formatCurrency(v, cur);

    container.querySelectorAll('[data-rv-tooltip]').forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            try {
                const d = JSON.parse(el.dataset.rvTooltip);
                let html = `<div class="rv-tip-title">${d.title}</div>`;
                if (d.rows && d.rows.length > 0) {
                    html += `<div class="rv-tip-rows">`;
                    d.rows.forEach(r => {
                        html += `<div class="rv-tip-row"><span class="rv-tip-label">${r.label}</span><span class="rv-tip-val">${fmtVal(r.value)}</span></div>`;
                    });
                    html += `</div><div class="rv-tip-total"><span>Total</span><span>${fmtVal(d.total)}</span></div>`;
                } else {
                    html += `<div class="rv-tip-total"><span>${fmtVal(d.total)}</span></div>`;
                }
                rvTip.innerHTML = html;
                rvTip.style.display = 'block';
            } catch(err) {}
        });
        el.addEventListener('mousemove', (e) => {
            const pad = 14;
            const tw = rvTip.offsetWidth;
            const th = rvTip.offsetHeight;
            let x = e.clientX + pad;
            let y = e.clientY - th - pad;
            if (x + tw > window.innerWidth - 8) x = e.clientX - tw - pad;
            if (y < 8) y = e.clientY + pad;
            rvTip.style.left = x + 'px';
            rvTip.style.top  = y + 'px';
        });
        el.addEventListener('mouseleave', () => {
            rvTip.style.display = 'none';
        });
    });
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
    // Step 1: saveStep1, Step 2: saveStep2 (Cell Selection), Step 3: saveStep3 (Team & Hours), Step 4: saveStep4 (Sharing Key), Step 5: Summary
    const validators = [null, saveStep1, saveStep2, saveStep3, saveStep4, null];

    if (step === 5) {
        // Create invoice on final step
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
