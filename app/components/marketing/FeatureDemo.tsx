"use client";

import { Badge } from "@/app/components/ui/badge";
import {
  Check,
  Mail,
  MessageSquare,
  Users,
  Zap,
  PawPrint,
  Gift,
  Calendar,
  Star,
  TrendingUp,
  Send,
  Heart,
  GitBranch,
  UserCheck,
  AlertCircle,
  ChevronRight,
  BarChart3,
  Phone,
  Lightbulb,
  Sparkles,
  Dog,
  ClipboardList,
  Link2,
} from "lucide-react";

export interface Feature {
  id: string;
  label: string;
  icon: React.ReactNode;
  value: string;
  valueLabel: string;
  headline: string;
  description: string;
}

export const features: Feature[] = [
  {
    id: "funnel",
    label: "Funnel",
    icon: <GitBranch className="h-4 w-4" />,
    value: "847",
    valueLabel: "customers in active lifecycle",
    headline: "Never Lose a Customer",
    description: "Track every pet parent from first visit to loyal client with smart lifecycle rules.",
  },
  {
    id: "balto",
    label: "Balto",
    icon: <Dog className="h-4 w-4" />,
    value: "∞",
    valueLabel: "insights at your fingertips",
    headline: "Meet Balto, Your Navigation Assistant",
    description: "Ask anything about your business. Get instant answers, smart recommendations, and intelligently drafted campaigns.",
  },
  {
    id: "automations",
    label: "Programs",
    icon: <Zap className="h-4 w-4" />,
    value: "6",
    valueLabel: "automations running 24/7",
    headline: "Set It and Forget It",
    description: "Birthday wishes, referrals, and reminders—all on autopilot.",
  },
  {
    id: "customers",
    label: "Customers",
    icon: <Users className="h-4 w-4" />,
    value: "1,247",
    valueLabel: "customers & pets organized",
    headline: "All Your Data in One Place",
    description: "Import from any system. Segment, tag, and personalize at scale.",
  },
  {
    id: "leadgen",
    label: "Lead Gen",
    icon: <ClipboardList className="h-4 w-4" />,
    value: "247",
    valueLabel: "leads captured this month",
    headline: "Turn Visitors Into Customers",
    description: "Beautiful forms, scheduling links, and automated follow-ups that convert.",
  },
  {
    id: "campaigns",
    label: "Campaigns",
    icon: <Mail className="h-4 w-4" />,
    value: "12,847",
    valueLabel: "emails sent this month",
    headline: "Send Campaigns That Get Opened",
    description: "Personalized emails and texts that bring pet parents back.",
  },
  {
    id: "texting",
    label: "Texting",
    icon: <MessageSquare className="h-4 w-4" />,
    value: "98%",
    valueLabel: "response rate",
    headline: "Text Like a Pro",
    description: "Two-way SMS that feels personal. Reminders, confirmations, and conversations.",
  },
];

interface FeatureDemoProps {
  activeFeature: number;
  setActiveFeature: (index: number) => void;
  setPreviewModal: (type: string) => void;
}

export default function FeatureDemo({
  activeFeature,
  setActiveFeature,
  setPreviewModal,
}: FeatureDemoProps) {
  return (
    <section id="demo" className="pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Feature Toggle */}
        <div className="flex items-center justify-center gap-2 mb-6 flex-wrap">
          {features.map((feature, i) => (
            <button
              key={feature.id}
              onClick={() => setActiveFeature(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-subtitle text-sm transition-all ${
                activeFeature === i
                  ? "bg-critter-orange text-white"
                  : "bg-white text-critter-maroon hover:bg-critter-cream"
              }`}
            >
              {feature.icon}
              <span className="hidden sm:inline">{feature.label}</span>
            </button>
          ))}
        </div>

        {/* Feature Descriptor - Changes with active feature */}
        <div className="text-center mb-8">
          <h2 className="font-subtitle text-xl text-critter-maroon">{features[activeFeature].headline}</h2>
          <p className="font-body text-critter-gray max-w-md mx-auto">{features[activeFeature].description}</p>
        </div>

        {/* Product Screenshot */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-b from-critter-orange/5 to-critter-maroon/5 rounded-3xl blur-2xl" />
          <div className="relative bg-white rounded-2xl shadow-2xl border border-critter-cream overflow-hidden">
            {/* Browser Chrome */}
            <div className="bg-critter-orange px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/60" />
                <div className="w-3 h-3 rounded-full bg-white/40" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/10 rounded-md px-4 py-1">
                  <span className="font-body text-white/60 text-xs">hub.critter.pet</span>
                </div>
              </div>
            </div>

            {/* App Content - Changes based on active feature */}
            <div className="bg-critter-beige p-6 min-h-[420px]">
              {activeFeature === 5 && (
                /* Campaigns View */
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm h-full">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-subtitle text-lg text-critter-maroon">Active Campaigns</h3>
                        <Badge className="bg-green-100 text-green-700 font-body">3 Running</Badge>
                      </div>
                      <div className="space-y-4">
                        {[
                          { name: "Spring Grooming Special", sent: 847, opened: "High", status: "active" },
                          { name: "Referral Rewards", sent: 1243, opened: "High", status: "active" },
                          { name: "Birthday Wishes", sent: 156, opened: "High", status: "active" },
                        ].map((campaign, i) => (
                          <div
                            key={i}
                            onClick={() => setPreviewModal('campaign')}
                            className="flex items-center justify-between p-4 bg-critter-beige/50 rounded-lg cursor-pointer hover:bg-critter-cream/50 transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-critter-orange/10 flex items-center justify-center group-hover:bg-critter-orange group-hover:text-white transition-colors">
                                <Mail className="h-5 w-5 text-critter-orange group-hover:text-white" />
                              </div>
                              <div>
                                <p className="font-subtitle text-sm text-critter-maroon">{campaign.name}</p>
                                <p className="font-body text-xs text-critter-gray">{campaign.sent.toLocaleString()} sent</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <p className="font-subtitle text-sm text-critter-orange">{campaign.opened}</p>
                                <p className="font-body text-xs text-critter-gray">open rate</p>
                              </div>
                              <ChevronRight className="h-4 w-4 text-critter-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4 space-y-4">
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="h-4 w-4 text-critter-orange" />
                        <span className="font-body text-sm text-critter-gray">This Month</span>
                      </div>
                      <p className="font-title text-3xl text-critter-maroon">12,847</p>
                      <p className="font-body text-sm text-critter-gray">emails delivered</p>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="h-4 w-4 text-critter-orange" />
                        <span className="font-body text-sm text-critter-gray">Avg Open Rate</span>
                      </div>
                      <p className="font-title text-3xl text-critter-maroon">High</p>
                      <p className="font-body text-sm text-green-600">Above industry avg</p>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature === 2 && (
                /* Programs/Automations View */
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-12">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h3 className="font-subtitle text-lg text-critter-maroon mb-6">Program Library</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { name: "Pet Birthday", icon: <Gift className="h-6 w-6" />, desc: "Automatic birthday wishes", active: true, preview: "birthday" },
                          { name: "Referral Program", icon: <Users className="h-6 w-6" />, desc: "Reward loyal customers", active: true, preview: "referral" },
                          { name: "Win-Back", icon: <Heart className="h-6 w-6" />, desc: "Re-engage lapsed clients", active: false, preview: null },
                          { name: "Service Upsell", icon: <TrendingUp className="h-6 w-6" />, desc: "Cross-sell services", active: true, preview: null },
                          { name: "Review Request", icon: <Star className="h-6 w-6" />, desc: "Get more reviews", active: false, preview: null },
                          { name: "Appointment Reminder", icon: <Calendar className="h-6 w-6" />, desc: "Reduce no-shows", active: true, preview: null },
                        ].map((program, i) => (
                          <div
                            key={i}
                            onClick={() => program.preview && setPreviewModal(program.preview)}
                            className={`p-4 rounded-xl border-2 transition-all ${
                              program.active ? 'border-critter-orange bg-critter-orange/5' : 'border-critter-cream bg-critter-beige/30'
                            } ${program.preview ? 'cursor-pointer hover:shadow-lg' : ''}`}
                          >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${program.active ? 'bg-critter-orange text-white' : 'bg-critter-cream text-critter-gray'}`}>
                              {program.icon}
                            </div>
                            <p className="font-subtitle text-sm text-critter-maroon">{program.name}</p>
                            <p className="font-body text-xs text-critter-gray">{program.desc}</p>
                            <div className="flex items-center justify-between mt-2">
                              {program.active && (
                                <Badge className="bg-green-100 text-green-700 text-xs">Active</Badge>
                              )}
                              {program.preview && (
                                <span className="font-body text-xs text-critter-orange">Click to preview →</span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature === 0 && (
                /* Funnel/Lifecycle View */
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-subtitle text-lg text-critter-maroon">Customer Lifecycle</h3>
                        <button
                          onClick={() => setPreviewModal('funnel')}
                          className="font-body text-xs text-critter-orange hover:underline"
                        >
                          View details →
                        </button>
                      </div>
                      <div className="space-y-3">
                        {[
                          { stage: "New Lead", count: 23, color: "bg-critter-blue", icon: <UserCheck className="h-4 w-4" />, action: "Welcome email in 2h" },
                          { stage: "Active Client", count: 847, color: "bg-green-500", icon: <Check className="h-4 w-4" />, action: "Engagement on track" },
                          { stage: "At Risk", count: 43, color: "bg-yellow-500", icon: <AlertCircle className="h-4 w-4" />, action: "Win-back triggered" },
                          { stage: "Lost", count: 12, color: "bg-red-500", icon: <Heart className="h-4 w-4" />, action: "Re-engagement queued" },
                        ].map((stage, i) => (
                          <div
                            key={i}
                            onClick={() => setPreviewModal('funnel')}
                            className="flex items-center justify-between p-4 bg-critter-beige/50 rounded-lg cursor-pointer hover:bg-critter-cream/50 transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-lg ${stage.color} text-white flex items-center justify-center`}>
                                {stage.icon}
                              </div>
                              <div>
                                <p className="font-subtitle text-sm text-critter-maroon">{stage.stage}</p>
                                <p className="font-body text-xs text-critter-gray">{stage.count} customers</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-body text-xs text-critter-orange">{stage.action}</span>
                              <ChevronRight className="h-4 w-4 text-critter-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                      <h4 className="font-subtitle text-sm text-critter-maroon mb-4">Active Rules</h4>
                      <div className="space-y-3">
                        {[
                          { name: "No visit in 30 days → At Risk", active: true },
                          { name: "New signup → Welcome series", active: true },
                          { name: "At Risk 14 days → Lost", active: true },
                          { name: "Birthday → Send wishes", active: true },
                        ].map((rule, i) => (
                          <div key={i} className="flex items-center gap-2 p-2 bg-critter-beige/50 rounded-lg">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span className="font-body text-xs text-critter-maroon">{rule.name}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-critter-cream">
                        <div className="flex items-center justify-between">
                          <span className="font-body text-sm text-critter-gray">Auto-transitions today</span>
                          <span className="font-subtitle text-lg text-critter-orange">14</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature === 3 && (
                /* Customers View */
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-8">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-subtitle text-lg text-critter-maroon">Customer Hub</h3>
                        <div className="flex gap-2">
                          <Badge className="bg-critter-orange/10 text-critter-orange">1,247 Total</Badge>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {[
                          { name: "Sarah Johnson", pet: "Max (Golden Retriever)", tags: ["VIP", "Dog Owner"], lastVisit: "2 days ago" },
                          { name: "Mike Chen", pet: "Luna (Persian Cat)", tags: ["Cat Owner", "Monthly"], lastVisit: "1 week ago" },
                          { name: "Emily Davis", pet: "Buddy & Cooper", tags: ["Multi-Pet", "Referrer"], lastVisit: "3 days ago" },
                          { name: "James Wilson", pet: "Bella (Labrador)", tags: ["New Client"], lastVisit: "Today" },
                        ].map((customer, i) => (
                          <div
                            key={i}
                            onClick={() => setPreviewModal('customer')}
                            className="flex items-center justify-between p-3 hover:bg-critter-beige/50 rounded-lg transition-colors cursor-pointer group"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-critter-maroon text-white flex items-center justify-center font-subtitle text-sm">
                                {customer.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div>
                                <p className="font-subtitle text-sm text-critter-maroon">{customer.name}</p>
                                <p className="font-body text-xs text-critter-gray flex items-center gap-1">
                                  <PawPrint className="h-3 w-3 text-critter-orange" /> {customer.pet}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex gap-1">
                                {customer.tags.slice(0, 2).map((tag, j) => (
                                  <Badge key={j} variant="outline" className="text-xs border-critter-cream text-critter-gray">{tag}</Badge>
                                ))}
                              </div>
                              <span className="font-body text-xs text-critter-gray">{customer.lastVisit}</span>
                              <ChevronRight className="h-4 w-4 text-critter-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className="bg-white rounded-xl p-5 shadow-sm">
                      <h4 className="font-subtitle text-sm text-critter-maroon mb-4">Import From Anywhere</h4>
                      <div className="space-y-3">
                        {[
                          { name: "Time to Pet", connected: true },
                          { name: "CSV Upload", connected: true },
                          { name: "Manual Entry", connected: true },
                          { name: "API Integration", connected: false },
                        ].map((source, i) => (
                          <div key={i} className="flex items-center justify-between p-2 bg-critter-beige/50 rounded-lg">
                            <span className="font-body text-sm text-critter-maroon">{source.name}</span>
                            {source.connected ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <span className="font-body text-xs text-critter-gray">Coming soon</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature === 6 && (
                /* Texting View */
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-4 bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-critter-cream">
                      <h3 className="font-subtitle text-sm text-critter-maroon">Conversations</h3>
                    </div>
                    <div className="divide-y divide-critter-cream">
                      {[
                        { name: "Sarah J.", preview: "Thanks! See you Tuesday 🐕", time: "2m", unread: true },
                        { name: "Mike C.", preview: "Can I reschedule to...", time: "1h", unread: false },
                        { name: "Emily D.", preview: "Perfect, thanks!", time: "3h", unread: false },
                      ].map((convo, i) => (
                        <div key={i} className={`p-4 ${i === 0 ? 'bg-critter-orange/5 border-l-4 border-critter-orange' : ''}`}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-subtitle text-sm text-critter-maroon">{convo.name}</span>
                            <span className="font-body text-xs text-critter-gray">{convo.time}</span>
                          </div>
                          <p className="font-body text-xs text-critter-gray truncate">{convo.preview}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-8 bg-white rounded-xl shadow-sm flex flex-col">
                    <div className="p-4 border-b border-critter-cream flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-critter-maroon text-white flex items-center justify-center font-subtitle text-xs">SJ</div>
                      <div>
                        <p className="font-subtitle text-sm text-critter-maroon">Sarah Johnson</p>
                        <p className="font-body text-xs text-critter-gray">Max (Golden Retriever)</p>
                      </div>
                    </div>
                    <div className="flex-1 p-4 space-y-3">
                      <div className="flex justify-end">
                        <div className="bg-critter-orange text-white px-4 py-2 rounded-2xl rounded-br-md max-w-[70%]">
                          <p className="font-body text-sm">Hi Sarah! Just a reminder that Max&apos;s grooming appointment is tomorrow at 2pm 🐕</p>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="bg-critter-cream px-4 py-2 rounded-2xl rounded-bl-md max-w-[70%]">
                          <p className="font-body text-sm text-critter-maroon">Thanks! See you Tuesday 🐕</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t border-critter-cream">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          placeholder="Type a message..."
                          className="flex-1 bg-critter-beige/50 rounded-full px-4 py-2 font-body text-sm outline-none"
                          readOnly
                        />
                        <button className="w-10 h-10 bg-critter-orange rounded-full flex items-center justify-center text-white">
                          <Send className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature === 1 && (
                /* Balto AI Assistant View */
                <div className="grid grid-cols-12 gap-4">
                  {/* AI Chat Panel */}
                  <div className="col-span-8">
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full border border-critter-cream">
                      {/* Chat Header */}
                      <div className="px-5 py-4 border-b border-critter-cream flex items-center justify-between bg-critter-beige/30">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center">
                              <Dog className="h-5 w-5 text-white" />
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                          </div>
                          <div>
                            <p className="font-subtitle text-critter-maroon">Balto</p>
                            <p className="font-body text-xs text-critter-gray">Your Navigation Assistant</p>
                          </div>
                        </div>
                        <Badge className="bg-critter-orange/10 text-critter-orange font-body text-xs">
                          <Sparkles className="h-3 w-3 mr-1" /> AI Powered
                        </Badge>
                      </div>

                      {/* Chat Messages */}
                      <div className="p-5 space-y-4 bg-critter-beige/20">
                        {/* User Message */}
                        <div className="flex justify-end">
                          <div className="bg-critter-maroon rounded-2xl rounded-br-sm px-4 py-3 max-w-[75%]">
                            <p className="font-body text-sm text-white">Who are my top 5 customers by revenue this quarter?</p>
                          </div>
                        </div>

                        {/* AI Response with Structured Data */}
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                            <Dog className="h-4 w-4 text-white" />
                          </div>
                          <div className="bg-white rounded-2xl rounded-bl-sm px-4 py-4 max-w-[85%] border border-critter-cream shadow-sm">
                            <div className="flex items-center gap-2 mb-3">
                              <Sparkles className="h-4 w-4 text-critter-orange" />
                              <span className="font-subtitle text-sm text-critter-maroon">Top Customers This Quarter</span>
                            </div>
                            <div className="space-y-2">
                              {[
                                { rank: 1, name: "Sarah Johnson", revenue: "$2,847", visits: 24 },
                                { rank: 2, name: "Mike Chen", revenue: "$2,134", visits: 18 },
                                { rank: 3, name: "Emily Davis", revenue: "$1,956", visits: 16 },
                                { rank: 4, name: "James Wilson", revenue: "$1,720", visits: 14 },
                                { rank: 5, name: "Lisa Brown", revenue: "$1,580", visits: 12 },
                              ].map((customer) => (
                                <div key={customer.rank} className="flex items-center justify-between py-2 px-3 bg-critter-beige/50 rounded-lg">
                                  <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-critter-orange flex items-center justify-center font-subtitle text-xs text-white">
                                      {customer.rank}
                                    </span>
                                    <span className="font-body text-sm text-critter-maroon">{customer.name}</span>
                                  </div>
                                  <div className="flex items-center gap-4">
                                    <span className="font-subtitle text-sm text-critter-orange">{customer.revenue}</span>
                                    <span className="font-body text-xs text-critter-gray">{customer.visits} visits</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                            <div className="mt-3 pt-3 border-t border-critter-cream flex items-center gap-2">
                              <span className="font-body text-xs text-critter-gray">Would you like me to draft a VIP appreciation campaign for these customers?</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Chat Input */}
                      <div className="px-5 py-4 border-t border-critter-cream bg-white">
                        <div className="flex items-center gap-3">
                          <input
                            type="text"
                            placeholder="Ask Balto anything about your business..."
                            className="flex-1 bg-critter-beige/50 rounded-full px-4 py-3 font-body text-sm text-critter-maroon placeholder:text-critter-gray outline-none focus:bg-critter-beige transition-colors"
                            readOnly
                          />
                          <button className="w-12 h-12 bg-critter-orange rounded-full flex items-center justify-center text-white shadow-sm hover:bg-critter-orange/90 transition-colors">
                            <Send className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Capabilities Sidebar */}
                  <div className="col-span-4 space-y-4">
                    <div
                      onClick={() => setPreviewModal('balto')}
                      className="bg-white rounded-xl p-5 shadow-sm cursor-pointer hover:shadow-lg transition-shadow group border border-critter-cream"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-subtitle text-sm text-critter-maroon">Balto Can...</h4>
                        <span className="font-body text-xs text-critter-orange opacity-0 group-hover:opacity-100 transition-opacity">See more →</span>
                      </div>
                      <div className="space-y-3">
                        {[
                          { icon: <BarChart3 className="h-4 w-4" />, label: "Analyze your business data" },
                          { icon: <Mail className="h-4 w-4" />, label: "Intelligently draft campaigns" },
                          { icon: <Users className="h-4 w-4" />, label: "Find specific customers" },
                          { icon: <TrendingUp className="h-4 w-4" />, label: "Forecast revenue trends" },
                          { icon: <Lightbulb className="h-4 w-4" />, label: "Suggest growth strategies" },
                        ].map((cap, i) => (
                          <div key={i} className="flex items-center gap-3 p-2 bg-critter-beige/50 rounded-lg">
                            <div className="w-7 h-7 rounded-full bg-critter-orange/10 flex items-center justify-center text-critter-orange">
                              {cap.icon}
                            </div>
                            <span className="font-body text-sm text-critter-maroon">{cap.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-critter-orange rounded-xl p-5 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Dog className="h-5 w-5" />
                        <span className="font-subtitle text-sm">Your Smart Guide Dog</span>
                      </div>
                      <p className="font-body text-sm text-white/80">
                        Balto learns your business patterns to give you smarter recommendations over time.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature === 4 && (
                /* Lead Gen View */
                <div className="grid grid-cols-12 gap-4">
                  {/* Lead Forms Panel */}
                  <div className="col-span-8">
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-critter-cream">
                      <div className="p-5 border-b border-critter-cream flex items-center justify-between">
                        <div>
                          <h3 className="font-subtitle text-lg text-critter-maroon">Lead Capture Forms</h3>
                          <p className="font-body text-sm text-critter-gray">Embed anywhere, convert everywhere</p>
                        </div>
                        <Badge className="bg-green-100 text-green-700 font-body">3 Active</Badge>
                      </div>

                      <div className="p-5 grid grid-cols-2 gap-4">
                        {/* Form Preview 1 - New Client Special */}
                        <div
                          onClick={() => setPreviewModal('leadgen')}
                          className="border-2 border-critter-orange rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
                        >
                          <div className="bg-critter-orange px-4 py-2">
                            <p className="font-subtitle text-sm text-white text-center">✨ New Client Special</p>
                          </div>
                          <div className="p-4 space-y-3 bg-gradient-to-b from-critter-beige/50 to-white">
                            <div className="relative">
                              <div className="absolute left-3 top-2.5 text-critter-gray">
                                <Users className="h-3.5 w-3.5" />
                              </div>
                              <div className="h-9 bg-white rounded-lg border border-critter-cream pl-9 flex items-center">
                                <span className="font-body text-xs text-critter-gray/60">Your name</span>
                              </div>
                            </div>
                            <div className="relative">
                              <div className="absolute left-3 top-2.5 text-critter-gray">
                                <Mail className="h-3.5 w-3.5" />
                              </div>
                              <div className="h-9 bg-white rounded-lg border border-critter-cream pl-9 flex items-center">
                                <span className="font-body text-xs text-critter-gray/60">Email address</span>
                              </div>
                            </div>
                            <div className="relative">
                              <div className="absolute left-3 top-2.5 text-critter-gray">
                                <PawPrint className="h-3.5 w-3.5" />
                              </div>
                              <div className="h-9 bg-white rounded-lg border border-critter-cream pl-9 flex items-center">
                                <span className="font-body text-xs text-critter-gray/60">Pet&apos;s name</span>
                              </div>
                            </div>
                            <div className="h-9 bg-critter-orange rounded-lg flex items-center justify-center">
                              <span className="font-subtitle text-xs text-white">Get 20% Off →</span>
                            </div>
                          </div>
                          <div className="p-3 bg-white flex items-center justify-between border-t border-critter-cream">
                            <div>
                              <p className="font-subtitle text-xs text-critter-maroon">247 leads</p>
                              <p className="font-body text-xs text-critter-gray">34% conversion</p>
                            </div>
                            <ChevronRight className="h-4 w-4 text-critter-gray opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>

                        {/* Form Preview 2 - Free Consultation */}
                        <div className="border-2 border-critter-cream rounded-xl overflow-hidden hover:border-critter-orange/50 transition-colors">
                          <div className="bg-critter-maroon px-4 py-2">
                            <p className="font-subtitle text-sm text-white text-center">📞 Free Consultation</p>
                          </div>
                          <div className="p-4 space-y-3 bg-gradient-to-b from-critter-beige/50 to-white">
                            <div className="relative">
                              <div className="absolute left-3 top-2.5 text-critter-gray">
                                <Users className="h-3.5 w-3.5" />
                              </div>
                              <div className="h-9 bg-white rounded-lg border border-critter-cream pl-9 flex items-center">
                                <span className="font-body text-xs text-critter-gray/60">Full name</span>
                              </div>
                            </div>
                            <div className="relative">
                              <div className="absolute left-3 top-2.5 text-critter-gray">
                                <Phone className="h-3.5 w-3.5" />
                              </div>
                              <div className="h-9 bg-white rounded-lg border border-critter-cream pl-9 flex items-center">
                                <span className="font-body text-xs text-critter-gray/60">Phone number</span>
                              </div>
                            </div>
                            <div className="h-9 bg-critter-maroon rounded-lg flex items-center justify-center">
                              <span className="font-subtitle text-xs text-white">Book My Call →</span>
                            </div>
                          </div>
                          <div className="p-3 bg-white border-t border-critter-cream">
                            <p className="font-subtitle text-xs text-critter-maroon">156 leads</p>
                            <p className="font-body text-xs text-critter-gray">28% conversion</p>
                          </div>
                        </div>

                        {/* Scheduling Link */}
                        <div className="border-2 border-critter-cream rounded-xl overflow-hidden hover:border-critter-orange/50 transition-colors">
                          <div className="bg-gradient-to-r from-critter-orange/10 to-critter-beige p-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-10 h-10 rounded-full bg-critter-orange flex items-center justify-center">
                                <Calendar className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <p className="font-subtitle text-sm text-critter-maroon">Scheduling Link</p>
                                <p className="font-body text-xs text-critter-gray">Let clients book directly</p>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-3 border border-critter-cream">
                              <div className="flex items-center gap-2 mb-2">
                                <Link2 className="h-4 w-4 text-critter-orange" />
                                <span className="font-body text-xs text-critter-maroon">critter.pet/book/pawsgrooming</span>
                              </div>
                              <div className="flex gap-1">
                                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                                  <div key={day} className="flex-1 py-1 bg-critter-beige rounded text-center">
                                    <span className="font-body text-xs text-critter-gray">{day}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="p-3 bg-white border-t border-critter-cream flex items-center justify-between">
                            <div>
                              <p className="font-subtitle text-xs text-critter-maroon">89 bookings</p>
                              <p className="font-body text-xs text-critter-gray">This month</p>
                            </div>
                            <Badge className="bg-green-100 text-green-700 text-xs">Active</Badge>
                          </div>
                        </div>

                        {/* Create New */}
                        <div className="border-2 border-dashed border-critter-cream rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-critter-orange hover:bg-critter-orange/5 transition-all cursor-pointer group">
                          <div className="w-14 h-14 rounded-full bg-critter-cream group-hover:bg-critter-orange/20 flex items-center justify-center mb-3 transition-colors">
                            <ClipboardList className="h-7 w-7 text-critter-gray group-hover:text-critter-orange transition-colors" />
                          </div>
                          <p className="font-subtitle text-sm text-critter-gray group-hover:text-critter-maroon transition-colors">Create New Form</p>
                          <p className="font-body text-xs text-critter-gray mb-2">Drag & drop builder</p>
                          <div className="flex gap-1">
                            {[ClipboardList, Calendar, Gift].map((Icon, i) => (
                              <div key={i} className="w-6 h-6 rounded bg-critter-beige flex items-center justify-center">
                                <Icon className="h-3 w-3 text-critter-gray" />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lead Stats Sidebar */}
                  <div className="col-span-4 space-y-4">
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-critter-cream">
                      <h4 className="font-subtitle text-sm text-critter-maroon mb-4">This Month&apos;s Performance</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-body text-sm text-critter-gray">Total Leads</span>
                            <span className="font-subtitle text-lg text-critter-orange">492</span>
                          </div>
                          <div className="h-2 bg-critter-beige rounded-full overflow-hidden">
                            <div className="h-full w-[85%] bg-critter-orange rounded-full" />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-body text-sm text-critter-gray">Converted</span>
                            <span className="font-subtitle text-lg text-green-600">167</span>
                          </div>
                          <div className="h-2 bg-critter-beige rounded-full overflow-hidden">
                            <div className="h-full w-[34%] bg-green-500 rounded-full" />
                          </div>
                        </div>
                        <div className="pt-3 border-t border-critter-cream">
                          <div className="flex items-center justify-between">
                            <span className="font-body text-sm text-critter-gray">Revenue from Leads</span>
                            <span className="font-subtitle text-lg text-critter-maroon">$18,340</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-critter-beige rounded-xl p-5">
                      <h4 className="font-subtitle text-sm text-critter-maroon mb-3">Lead Sources</h4>
                      <div className="space-y-2">
                        {[
                          { source: "Website Form", leads: 247, pct: 50, icon: <ClipboardList className="h-4 w-4" /> },
                          { source: "Scheduling Link", leads: 156, pct: 32, icon: <Calendar className="h-4 w-4" /> },
                          { source: "Referral Page", leads: 89, pct: 18, icon: <Users className="h-4 w-4" /> },
                        ].map((src, i) => (
                          <div key={i} className="flex items-center justify-between p-2 bg-white rounded-lg">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded bg-critter-orange/10 flex items-center justify-center text-critter-orange">
                                {src.icon}
                              </div>
                              <span className="font-body text-sm text-critter-maroon">{src.source}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-subtitle text-sm text-critter-orange">{src.leads}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
