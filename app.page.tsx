// ============================================================================
// CATALYST PARTNER NETWORK (CPN) // NETLIFY-READY AFFILIATE ECOSYSTEM
// Framework: Next.js (Static Export / App Router) + Tailwind CSS + Lucide
// ============================================================================

'use client';

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Megaphone, 
  DollarSign, 
  Wallet, 
  BarChart3, 
  Copy, 
  ShieldCheck, 
  ArrowUpRight, 
  LogOut,
  CheckCircle2,
  FileText,
  Settings,
  Search,
  Download
} from 'lucide-react';

export default function NetlifyCatalystAffiliateApp() {
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'marketplace' | 'commissions' | 'withdrawals' | 'resources' | 'leaderboard' | 'settings'
  >('dashboard');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (link: string, id: string) => {
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-72 border-r border-slate-800 bg-slate-900/60 flex flex-col justify-between">
        <div>
          <div className="p-6 border-b border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                CPN // PAN
              </span>
              <p className="text-xs text-slate-400 mt-0.5">Aevon Industries // Catalyst</p>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-semibold">
              Netlify Ready
            </span>
          </div>
          
          <nav className="p-4 space-y-1.5 overflow-y-auto max-h-[calc(100vh-180px)]">
            <SidebarNavButton active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} icon={<LayoutDashboard size={18} />} label="Overview Dashboard" />
            <SidebarNavButton active={activeTab === 'marketplace'} onClick={() => setActiveTab('marketplace')} icon={<Megaphone size={18} />} label="Campaign Marketplace" />
            <SidebarNavButton active={activeTab === 'commissions'} onClick={() => setActiveTab('commissions')} icon={<DollarSign size={18} />} label="Commission Center" />
            <SidebarNavButton active={activeTab === 'withdrawals'} onClick={() => setActiveTab('withdrawals')} icon={<Wallet size={18} />} label="Withdrawal & Payouts" />
            <SidebarNavButton active={activeTab === 'resources'} onClick={() => setActiveTab('resources')} icon={<FileText size={18} />} label="Marketing Asset Library" />
            <SidebarNavButton active={activeTab === 'leaderboard'} onClick={() => setActiveTab('leaderboard')} icon={<BarChart3 size={18} />} label="Global Leaderboard" />
            <SidebarNavButton active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} icon={<Settings size={18} />} label="Account & Postbacks" />
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800 bg-slate-900/30">
          <div className="flex items-center gap-3 px-2 py-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-sm text-white">
              JD
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-slate-200 truncate">Julian Vance</p>
              <p className="text-[10px] text-slate-400 truncate">Tier-2 Elite Partner</p>
            </div>
          </div>
          <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-red-400 rounded-lg hover:bg-red-500/10 transition-colors">
            <LogOut size={16} />
            Sign Out Session
          </button>
        </div>
      </aside>

      {/* Main Execution Shell */}
      <div className="flex-1 flex flex-col overflow-hidden bg-slate-950">
        <header className="h-16 border-b border-slate-800 bg-slate-900/30 flex items-center justify-between px-8">
          <h1 className="text-lg font-semibold text-slate-200 capitalize">
            {activeTab.replace('_', ' ')}
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search size={16} className="absolute left-3 top-2.5 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search campaigns, links..." 
                className="bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 focus:outline-none w-64"
              />
            </div>
            <span className="text-xs px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium flex items-center gap-1.5">
              <ShieldCheck size={14} /> Verified Partner
            </span>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 bg-slate-950">
          {activeTab === 'dashboard' && <FullAffiliateDashboardView />}
          {activeTab === 'marketplace' && <FullCampaignMarketplaceView onCopy={handleCopy} copiedId={copiedId} />}
          {activeTab === 'commissions' && <FullCommissionCenterView />}
          {activeTab === 'withdrawals' && <FullWithdrawalCenterView />}
          {activeTab === 'resources' && <FullAssetLibraryView />}
          {activeTab === 'leaderboard' && <FullLeaderboardView />}
          {activeTab === 'settings' && <FullSettingsPostbackView />}
        </main>
      </div>
    </div>
  );
}

function SidebarNavButton({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-3.5 py-3 rounded-xl text-sm font-medium transition-all ${
        active 
          ? 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow-lg shadow-indigo-600/20 font-semibold' 
          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function FullAffiliateDashboardView() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <MetricCard title="Available Balance" value="$1,240.00" trend="Net-14 Hold Cleared" icon={<Wallet className="text-emerald-400" size={20} />} />
        <MetricCard title="Lifetime Earnings" value="$14,890.00" trend="+18% vs last month" icon={<DollarSign className="text-indigo-400" size={20} />} />
        <MetricCard title="Today's Clicks" value="342" trend="98.4% unique IP rate" icon={<BarChart3 className="text-cyan-400" size={20} />} />
        <MetricCard title="Conversion Rate" value="4.8%" trend="S2S Postback active" icon={<ArrowUpRight className="text-amber-400" size={20} />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-base font-bold text-slate-100">Traffic & Conversion Performance</h2>
            <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded-lg">Last 30 Days</span>
          </div>
          <div className="h-72 flex flex-col items-center justify-center border border-dashed border-slate-800 rounded-xl text-slate-500 text-sm space-y-2">
            <BarChart3 size={32} className="text-slate-600" />
            <span>[ Interactive Analytics Chart Rendering Engine ]</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
          <div>
            <h2 className="text-base font-bold text-slate-100 mb-4">Tier-2 Sub-Affiliates</h2>
            <p className="text-xs text-slate-400 mb-4">You earn 5% override commission on all active sub-affiliates recruited via your master referral ID.</p>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-200">Active Recruits</p>
                  <p className="text-sm font-bold text-indigo-400">14 Partners</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-200">Override Earnings</p>
                  <p className="text-sm font-bold text-emerald-400">+$310.40</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 border-t border-slate-800">
            <input type="text" readOnly value="https://cpn.catalystdigital.io/ref/master-jv99" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-xs text-slate-400 focus:outline-none mb-2" />
            <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors">
              Copy Master Recruit Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FullCampaignMarketplaceView({ onCopy, copiedId }: { onCopy: (link: string, id: string) => void; copiedId: string | null }) {
  const campaigns = [
    { id: 'c1', client: 'Acme SaaS Corp', title: 'Enterprise Growth Q3', commission: '15% Rev Share', target: 'B2B Founders & CTOs', action: 'SaaS Paid Signup', link: 'https://cpn.catalystdigital.io/ref/acme-q3-882' },
    { id: 'c2', client: 'Nexus Fintech', title: 'Global App Acquisition', commission: '$45.00 CPA', target: 'Mobile Users (iOS/Android)', action: 'First App Deposit', link: 'https://cpn.catalystdigital.io/ref/nexus-app-104' },
    { id: 'c3', client: 'Aevon Commerce', title: 'Direct-to-Consumer Launch', commission: '20% Per Sale', target: 'E-commerce Shoppers', action: 'Verified Checkout', link: 'https://cpn.catalystdigital.io/ref/aevon-d2c-551' },
    { id: 'c4', client: 'Catalyst Cloud AI', title: 'Enterprise Infrastructure', commission: '$120.00 Fixed CPA', target: 'DevOps Engineers', action: 'Cluster Deployment', link: 'https://cpn.catalystdigital.io/ref/catalyst-ai-991' },
  ];

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl border border-slate-800 bg-gradient-to-r from-indigo-950/40 via-slate-900/40 to-slate-900/40 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-100">Campaign Marketplace</h2>
          <p className="text-sm text-slate-400 mt-1">Deploy high-converting campaigns with automated S2S postback tracking.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {campaigns.map((camp) => (
          <div key={camp.id} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-semibold text-indigo-400">{camp.client}</span>
                <span className="flex items-center gap-1 bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-500/20 font-medium">
                  <ShieldCheck size={12} /> Verified Campaign
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-100">{camp.title}</h3>
              
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                <div>
                  <span className="text-xs text-slate-500 block">Commission Model</span>
                  <span className="font-bold text-emerald-400 text-base">{camp.commission}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Required Action</span>
                  <span className="font-medium text-slate-200 text-xs mt-0.5 block">{camp.action}</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <input type="text" readOnly value={camp.link} className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-slate-400 w-full focus:outline-none font-mono" />
              <button onClick={() => onCopy(camp.link, camp.id)} className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors flex items-center justify-center gap-2 text-xs font-semibold shrink-0">
                {copiedId === camp.id ? <CheckCircle2 size={16} className="text-emerald-300" /> : <Copy size={16} />}
                {copiedId === camp.id ? 'Copied' : 'Copy'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FullCommissionCenterView() {
  return (
    <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
      <h2 className="text-base font-bold text-slate-100 mb-1">Commission Ledger & Attribution Log</h2>
      <p className="text-xs text-slate-400 mb-6">All conversions are subject to an automated 14-day rolling hold period.</p>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="border-b border-slate-800 text-slate-400 text-xs uppercase bg-slate-950/60">
            <tr>
              <th className="p-3.5">Campaign ID</th>
              <th className="p-3.5">Conversion Type</th>
              <th className="p-3.5">Commission</th>
              <th className="p-3.5">Status</th>
              <th className="p-3.5">Hold Release</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-xs">
            <CommissionRow id="CONV-9921" campaign="Enterprise Growth Q3" type="Paid Plan Signup" amount="+$120.00" status="Approved" date="Aug 10, 2026" />
            <CommissionRow id="CONV-9920" campaign="Global App Acquisition" type="First Deposit" amount="+$45.00" status="Pending Hold" date="Aug 18, 2026" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CommissionRow({ id, campaign, type, amount, status, date }: { id: string; campaign: string; type: string; amount: string; status: string; date: string }) {
  const statusColor = status === 'Approved' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
  return (
    <tr className="hover:bg-slate-900/40 transition-colors">
      <td className="p-3.5 font-medium text-slate-200">{id} <span className="block text-[10px] text-slate-500">{campaign}</span></td>
      <td className="p-3.5 text-slate-400">{type}</td>
      <td className="p-3.5 font-bold text-emerald-400 text-sm">{amount}</td>
      <td className="p-3.5"><span className={`px-2.5 py-1 rounded-md font-semibold ${statusColor}`}>{status}</span></td>
      <td className="p-3.5 text-slate-400">{date}</td>
    </tr>
  );
}

function FullWithdrawalCenterView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between space-y-6">
        <div>
          <h2 className="text-base font-bold text-slate-100 mb-2">Request Payout</h2>
          <p className="text-xs text-slate-400 mb-6">Minimum threshold is $50.00.</p>
          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-300 block mb-1.5">Withdrawal Amount ($USD)</label>
              <input type="number" defaultValue="1240.00" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none font-bold" />
            </div>
          </div>
        </div>
        <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition-colors">
          Submit Withdrawal Request
        </button>
      </div>
      <div className="lg:col-span-2 p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
        <h2 className="text-base font-bold text-slate-100 mb-4">Payment Ledger</h2>
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-sm">
          <div>
            <p className="font-semibold text-slate-200">Payout #WD-8812</p>
            <p className="text-xs text-slate-400">Processed Jul 01, 2026</p>
          </div>
          <span className="text-xs font-bold px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">$850.00 (Paid)</span>
        </div>
      </div>
    </div>
  );
}

function FullAssetLibraryView() {
  return (
    <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
      <h2 className="text-base font-bold text-slate-100 mb-1">Marketing Asset Library</h2>
      <p className="text-xs text-slate-400 mb-6">Download brand-approved promotional creatives.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl border border-slate-800 bg-slate-950 flex flex-col justify-between space-y-4">
          <div>
            <span className="text-[10px] uppercase font-bold px-2 py-1 rounded bg-indigo-500/10 text-indigo-400">Social</span>
            <h3 className="text-sm font-bold text-slate-100 mt-3">Q3 Growth Video Reels</h3>
          </div>
          <button className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-2">
            <Download size={14} /> Download Asset
          </button>
        </div>
      </div>
    </div>
  );
}

function FullLeaderboardView() {
  return (
    <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
      <h2 className="text-base font-bold text-slate-100 mb-1">Global Affiliate Leaderboard</h2>
      <p className="text-xs text-slate-400 mb-6">Top performing marketers for Q3.</p>
      <div className="space-y-3">
        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
          <span className="font-semibold text-slate-200 text-sm">#1 Apex Media Group</span>
          <span className="font-bold text-emerald-400 text-sm">$64,210.00</span>
        </div>
        <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800">
          <span className="font-semibold text-slate-200 text-sm">#2 Julian Vance (You)</span>
          <span className="font-bold text-emerald-400 text-sm">$14,890.00</span>
        </div>
      </div>
    </div>
  );
}

function FullSettingsPostbackView() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-4">
        <h2 className="text-base font-bold text-slate-100">S2S Postback Configuration</h2>
        <input type="text" defaultValue="https://your-tracker.com/postback?click_id={click_id}" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-300 font-mono focus:outline-none" />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold">Save URL</button>
      </div>
    </div>
  );
}

function MetricCard({ title, value, trend, icon }: { title: string; value: string; trend: string; icon: React.ReactNode }) {
  return (
    <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/40 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-400">{title}</span>
        <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-800">{icon}</div>
      </div>
      <div className="mt-4">
        <span className="text-2xl font-black text-slate-100">{value}</span>
        <div className="flex items-center gap-1 mt-1 text-[11px] text-emerald-400 font-semibold">{trend}</div>
      </div>
    </div>
  );
}
