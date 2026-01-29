"use client";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import {
  ArrowRight,
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
  AlertCircle,
  ChevronRight,
  X,
  Share2,
  Copy,
  Clock,
  Target,
  BarChart3,
  Phone,
  Tag,
  Sparkles,
  Dog,
  ClipboardList,
  Link2,
  GitBranch,
} from "lucide-react";

// Preview types for navigation - matches feature tab order
export const previewTypes = ['campaign', 'referral', 'birthday', 'funnel', 'customer', 'texting', 'balto', 'leadgen'] as const;
export type PreviewType = typeof previewTypes[number];

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
  onNavigate: (type: string) => void;
}

export default function PreviewModal({
  isOpen,
  onClose,
  type,
  onNavigate
}: PreviewModalProps) {
  if (!isOpen) return null;

  const currentIndex = previewTypes.indexOf(type as PreviewType);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < previewTypes.length - 1;

  const previewLabels: Record<string, string> = {
    campaign: 'Campaigns',
    referral: 'Programs: Referral',
    birthday: 'Programs: Birthday',
    funnel: 'Funnel',
    customer: 'Customers',
    texting: 'Texting',
    balto: 'AI Assistant',
    leadgen: 'Lead Gen',
  };

  const previews: Record<string, React.ReactNode> = {
    referral: (
      <div className="space-y-6">
        <div className="text-center pb-4 border-b border-critter-cream">
          <div className="w-16 h-16 rounded-full bg-critter-orange/10 flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-critter-orange" />
          </div>
          <h3 className="font-title text-2xl text-critter-maroon">Referral Program</h3>
          <p className="font-body text-critter-gray">Turn happy customers into your best marketers</p>
        </div>

        {/* Referral Link Section */}
        <div className="bg-critter-beige rounded-xl p-4">
          <p className="font-subtitle text-sm text-critter-maroon mb-2">Your Unique Referral Link</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-white rounded-lg px-4 py-2 font-body text-sm text-critter-gray border border-critter-cream">
              hub.critter.pet/refer/pawsgrooming
            </div>
            <button className="p-2 bg-critter-orange rounded-lg text-white hover:bg-critter-orange/90">
              <Copy className="h-4 w-4" />
            </button>
            <button className="p-2 bg-critter-maroon rounded-lg text-white hover:bg-critter-maroon/90">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 text-center border border-critter-cream">
            <p className="font-title text-2xl text-critter-orange">47</p>
            <p className="font-body text-xs text-critter-gray">Total Referrals</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-critter-cream">
            <p className="font-title text-2xl text-critter-maroon">23</p>
            <p className="font-body text-xs text-critter-gray">Converted</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-critter-cream">
            <p className="font-title text-2xl text-green-600">$1,150</p>
            <p className="font-body text-xs text-critter-gray">Revenue</p>
          </div>
        </div>

        {/* Top Referrers */}
        <div>
          <p className="font-subtitle text-sm text-critter-maroon mb-3">Top Referrers</p>
          <div className="space-y-2">
            {[
              { name: "Sarah Johnson", referrals: 8, reward: "$80" },
              { name: "Mike Chen", referrals: 5, reward: "$50" },
              { name: "Emily Davis", referrals: 4, reward: "$40" },
            ].map((referrer, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-white rounded-lg border border-critter-cream">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-critter-maroon text-white flex items-center justify-center font-subtitle text-xs">
                    {referrer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="font-body text-sm text-critter-maroon">{referrer.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Badge className="bg-critter-orange/10 text-critter-orange">{referrer.referrals} referrals</Badge>
                  <span className="font-subtitle text-sm text-green-600">{referrer.reward}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),

    birthday: (
      <div className="space-y-6">
        <div className="text-center pb-4 border-b border-critter-cream">
          <div className="w-16 h-16 rounded-full bg-critter-orange/10 flex items-center justify-center mx-auto mb-4">
            <Gift className="h-8 w-8 text-critter-orange" />
          </div>
          <h3 className="font-title text-2xl text-critter-maroon">Pet Birthday Program</h3>
          <p className="font-body text-critter-gray">Automatically celebrate every pet&apos;s special day</p>
        </div>

        {/* Upcoming Birthdays */}
        <div>
          <p className="font-subtitle text-sm text-critter-maroon mb-3">Upcoming This Week</p>
          <div className="space-y-2">
            {[
              { pet: "Max", owner: "Sarah Johnson", date: "Tomorrow", breed: "Golden Retriever" },
              { pet: "Luna", owner: "Mike Chen", date: "In 3 days", breed: "Persian Cat" },
              { pet: "Buddy", owner: "Emily Davis", date: "In 5 days", breed: "Labrador" },
            ].map((birthday, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-critter-beige rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-critter-orange text-white flex items-center justify-center">
                    🎂
                  </div>
                  <div>
                    <p className="font-subtitle text-sm text-critter-maroon">{birthday.pet}</p>
                    <p className="font-body text-xs text-critter-gray">{birthday.breed} • {birthday.owner}</p>
                  </div>
                </div>
                <Badge className="bg-critter-orange/10 text-critter-orange">{birthday.date}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Email Preview */}
        <div className="bg-white rounded-xl border border-critter-cream overflow-hidden">
          <div className="bg-critter-maroon px-4 py-2">
            <p className="font-body text-xs text-white/70">Email Preview</p>
          </div>
          <div className="p-4">
            <p className="font-subtitle text-sm text-critter-maroon mb-2">🎉 Happy Birthday, Max!</p>
            <p className="font-body text-sm text-critter-gray">
              Max is turning 5! To celebrate, here&apos;s a special 15% off your next grooming appointment...
            </p>
            <div className="mt-3 p-3 bg-critter-beige rounded-lg">
              <p className="font-body text-xs text-critter-gray">Use code: <span className="font-subtitle text-critter-orange">BDAY15</span></p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-critter-beige rounded-xl p-4 text-center">
            <p className="font-title text-2xl text-critter-maroon">156</p>
            <p className="font-body text-xs text-critter-gray">Emails sent this month</p>
          </div>
          <div className="bg-critter-beige rounded-xl p-4 text-center">
            <p className="font-title text-2xl text-critter-orange">34%</p>
            <p className="font-body text-xs text-critter-gray">Redemption rate</p>
          </div>
        </div>
      </div>
    ),

    funnel: (
      <div className="space-y-6">
        <div className="text-center pb-4 border-b border-critter-cream">
          <div className="w-16 h-16 rounded-full bg-critter-orange/10 flex items-center justify-center mx-auto mb-4">
            <GitBranch className="h-8 w-8 text-critter-orange" />
          </div>
          <h3 className="font-title text-2xl text-critter-maroon">Customer Lifecycle</h3>
          <p className="font-body text-critter-gray">Automated rules that keep customers engaged</p>
        </div>

        {/* Visual Funnel */}
        <div className="relative">
          <div className="space-y-2">
            {[
              { stage: "New Lead", count: 23, width: "100%", color: "bg-critter-blue" },
              { stage: "Active Client", count: 847, width: "85%", color: "bg-green-500" },
              { stage: "At Risk", count: 43, width: "40%", color: "bg-yellow-500" },
              { stage: "Lost", count: 12, width: "20%", color: "bg-red-400" },
            ].map((stage, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-24 text-right">
                  <p className="font-subtitle text-sm text-critter-maroon">{stage.stage}</p>
                </div>
                <div className="flex-1">
                  <div
                    className={`h-10 ${stage.color} rounded-lg flex items-center justify-end pr-3 transition-all`}
                    style={{ width: stage.width }}
                  >
                    <span className="font-subtitle text-sm text-white">{stage.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Rule Example */}
        <div className="bg-critter-beige rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-4 w-4 text-critter-orange" />
            <p className="font-subtitle text-sm text-critter-maroon">Active Rule Example</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className="bg-white border-critter-cream">No visit in 30 days</Badge>
            <ArrowRight className="h-4 w-4 text-critter-orange" />
            <Badge className="bg-yellow-100 text-yellow-700">Move to At Risk</Badge>
            <ArrowRight className="h-4 w-4 text-critter-orange" />
            <Badge className="bg-critter-orange/10 text-critter-orange">Send win-back email</Badge>
          </div>
        </div>

        {/* Today's Activity */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-critter-cream">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-critter-orange" />
              <p className="font-body text-xs text-critter-gray">Today</p>
            </div>
            <p className="font-title text-2xl text-critter-maroon">14</p>
            <p className="font-body text-xs text-critter-gray">Auto-transitions</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-critter-cream">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-critter-orange" />
              <p className="font-body text-xs text-critter-gray">Triggered</p>
            </div>
            <p className="font-title text-2xl text-critter-maroon">8</p>
            <p className="font-body text-xs text-critter-gray">Automated emails</p>
          </div>
        </div>
      </div>
    ),

    customer: (
      <div className="space-y-6">
        <div className="text-center pb-4 border-b border-critter-cream">
          <div className="w-16 h-16 rounded-full bg-critter-orange/10 flex items-center justify-center mx-auto mb-4">
            <Users className="h-8 w-8 text-critter-orange" />
          </div>
          <h3 className="font-title text-2xl text-critter-maroon">Customer Profile</h3>
          <p className="font-body text-critter-gray">Everything you need to know in one place</p>
        </div>

        {/* Customer Header */}
        <div className="flex items-center gap-4 p-4 bg-critter-beige rounded-xl">
          <div className="w-16 h-16 rounded-full bg-critter-maroon text-white flex items-center justify-center font-title text-xl">
            SJ
          </div>
          <div className="flex-1">
            <h4 className="font-subtitle text-lg text-critter-maroon">Sarah Johnson</h4>
            <p className="font-body text-sm text-critter-gray">sarah@email.com • (555) 123-4567</p>
            <div className="flex gap-1 mt-2">
              <Badge className="bg-critter-orange text-white text-xs">VIP</Badge>
              <Badge className="bg-green-100 text-green-700 text-xs">Active</Badge>
              <Badge variant="outline" className="text-xs border-critter-cream">Dog Owner</Badge>
            </div>
          </div>
        </div>

        {/* Pets */}
        <div>
          <p className="font-subtitle text-sm text-critter-maroon mb-3">Pets</p>
          <div className="flex gap-3">
            <div className="flex-1 p-3 bg-white rounded-xl border border-critter-cream">
              <div className="flex items-center gap-2 mb-2">
                <PawPrint className="h-4 w-4 text-critter-orange" />
                <span className="font-subtitle text-sm text-critter-maroon">Max</span>
              </div>
              <p className="font-body text-xs text-critter-gray">Golden Retriever • 5 years</p>
              <p className="font-body text-xs text-critter-gray mt-1">Last visit: 2 days ago</p>
            </div>
            <div className="flex-1 p-3 bg-white rounded-xl border border-critter-cream">
              <div className="flex items-center gap-2 mb-2">
                <PawPrint className="h-4 w-4 text-critter-orange" />
                <span className="font-subtitle text-sm text-critter-maroon">Bella</span>
              </div>
              <p className="font-body text-xs text-critter-gray">Siamese Cat • 3 years</p>
              <p className="font-body text-xs text-critter-gray mt-1">Last visit: 1 week ago</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-critter-beige rounded-lg">
            <p className="font-title text-xl text-critter-maroon">24</p>
            <p className="font-body text-xs text-critter-gray">Total visits</p>
          </div>
          <div className="text-center p-3 bg-critter-beige rounded-lg">
            <p className="font-title text-xl text-critter-orange">$1,240</p>
            <p className="font-body text-xs text-critter-gray">Lifetime value</p>
          </div>
          <div className="text-center p-3 bg-critter-beige rounded-lg">
            <p className="font-title text-xl text-critter-maroon">3</p>
            <p className="font-body text-xs text-critter-gray">Referrals</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button size="sm" className="flex-1 bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle">
            <Mail className="h-4 w-4 mr-2" /> Email
          </Button>
          <Button size="sm" className="flex-1 bg-critter-maroon hover:bg-critter-maroon/90 text-white font-subtitle">
            <Phone className="h-4 w-4 mr-2" /> Text
          </Button>
          <Button size="sm" variant="outline" className="flex-1 border-critter-cream font-subtitle">
            <Tag className="h-4 w-4 mr-2" /> Tag
          </Button>
        </div>
      </div>
    ),

    campaign: (
      <div className="space-y-6">
        <div className="text-center pb-4 border-b border-critter-cream">
          <div className="w-16 h-16 rounded-full bg-critter-orange/10 flex items-center justify-center mx-auto mb-4">
            <Mail className="h-8 w-8 text-critter-orange" />
          </div>
          <h3 className="font-title text-2xl text-critter-maroon">Campaign Details</h3>
          <p className="font-body text-critter-gray">Spring Grooming Special</p>
        </div>

        {/* Campaign Stats */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Sent", value: "847", icon: <Send className="h-4 w-4" /> },
            { label: "Opened", value: "712", icon: <Mail className="h-4 w-4" /> },
            { label: "Clicked", value: "234", icon: <Target className="h-4 w-4" /> },
            { label: "Booked", value: "67", icon: <Calendar className="h-4 w-4" /> },
          ].map((stat, i) => (
            <div key={i} className="text-center p-3 bg-critter-beige rounded-xl">
              <div className="w-8 h-8 rounded-full bg-critter-orange/10 flex items-center justify-center mx-auto mb-2 text-critter-orange">
                {stat.icon}
              </div>
              <p className="font-title text-xl text-critter-maroon">{stat.value}</p>
              <p className="font-body text-xs text-critter-gray">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Email Preview */}
        <div className="bg-white rounded-xl border border-critter-cream overflow-hidden">
          <div className="bg-critter-orange px-4 py-2">
            <p className="font-body text-xs text-white/70">Email Preview</p>
          </div>
          <div className="p-4">
            <p className="font-subtitle text-sm text-critter-maroon mb-2">🌸 Spring Into Savings!</p>
            <p className="font-body text-sm text-critter-gray">
              Get your furry friend ready for spring with 20% off any grooming service.
              Book before March 31st!
            </p>
            <Button size="sm" className="mt-3 bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle">
              Book Now
            </Button>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="bg-critter-beige rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="font-subtitle text-sm text-critter-maroon">Opens Over Time</p>
            <Badge className="bg-green-100 text-green-700">+12% vs avg</Badge>
          </div>
          <div className="flex items-end gap-1 h-20">
            {[40, 65, 80, 95, 100, 90, 85, 75, 60, 45, 35, 25].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-critter-orange/60 rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-body text-xs text-critter-gray">Day 1</span>
            <span className="font-body text-xs text-critter-gray">Day 12</span>
          </div>
        </div>
      </div>
    ),

    texting: (
      <div className="space-y-6">
        <div className="text-center pb-4 border-b border-critter-cream">
          <div className="w-16 h-16 rounded-full bg-critter-orange/10 flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="h-8 w-8 text-critter-orange" />
          </div>
          <h3 className="font-title text-2xl text-critter-maroon">Two-Way Texting</h3>
          <p className="font-body text-critter-gray">Real conversations with your customers</p>
        </div>

        {/* Message Thread Preview */}
        <div className="bg-critter-beige rounded-xl p-4 space-y-3">
          <div className="flex justify-end">
            <div className="bg-critter-orange text-white rounded-2xl rounded-br-sm px-4 py-2 max-w-[80%]">
              <p className="font-body text-sm">Hi Sarah! Just a reminder that Max&apos;s grooming appointment is tomorrow at 2pm. Reply Y to confirm!</p>
              <p className="font-body text-xs text-white/70 mt-1">10:30 AM</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-white border border-critter-cream rounded-2xl rounded-bl-sm px-4 py-2 max-w-[80%]">
              <p className="font-body text-sm text-critter-maroon">Y! See you tomorrow 🐕</p>
              <p className="font-body text-xs text-critter-gray mt-1">10:32 AM</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-critter-orange text-white rounded-2xl rounded-br-sm px-4 py-2 max-w-[80%]">
              <p className="font-body text-sm">Perfect! Max is confirmed for tomorrow. See you then! 🎉</p>
              <p className="font-body text-xs text-white/70 mt-1">10:33 AM</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-4 text-center border border-critter-cream">
            <p className="font-title text-2xl text-critter-orange">98%</p>
            <p className="font-body text-xs text-critter-gray">Open Rate</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-critter-cream">
            <p className="font-title text-2xl text-critter-maroon">847</p>
            <p className="font-body text-xs text-critter-gray">Sent This Month</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center border border-critter-cream">
            <p className="font-title text-2xl text-green-600">2 min</p>
            <p className="font-body text-xs text-critter-gray">Avg Response</p>
          </div>
        </div>

        {/* Recent Conversations */}
        <div>
          <p className="font-subtitle text-sm text-critter-maroon mb-3">Recent Conversations</p>
          <div className="space-y-2">
            {[
              { name: "Sarah Johnson", pet: "Max", message: "Y! See you tomorrow 🐕", time: "2 min ago", unread: false },
              { name: "Mike Chen", pet: "Luna", message: "Can I reschedule to Friday?", time: "15 min ago", unread: true },
              { name: "Emily Davis", pet: "Buddy", message: "Thanks for the reminder!", time: "1 hour ago", unread: false },
            ].map((convo, i) => (
              <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${convo.unread ? 'bg-critter-orange/5 border border-critter-orange/20' : 'bg-white border border-critter-cream'}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-critter-maroon text-white flex items-center justify-center font-subtitle text-xs">
                    {convo.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-subtitle text-sm text-critter-maroon">{convo.name}</p>
                      {convo.unread && <div className="w-2 h-2 rounded-full bg-critter-orange" />}
                    </div>
                    <p className="font-body text-xs text-critter-gray truncate max-w-[180px]">{convo.message}</p>
                  </div>
                </div>
                <span className="font-body text-xs text-critter-gray">{convo.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),

    balto: (
      <div className="space-y-6">
        <div className="text-center pb-4 border-b border-critter-cream">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center mx-auto mb-4">
            <Dog className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-title text-2xl text-critter-maroon">Meet Balto</h3>
          <p className="font-body text-critter-gray">Your Navigation Assistant</p>
        </div>

        {/* AI Chat Interface */}
        <div className="bg-white rounded-xl overflow-hidden border border-critter-cream">
          <div className="p-4 border-b border-critter-cream flex items-center gap-3 bg-critter-beige/30">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center">
              <Dog className="h-4 w-4 text-white" />
            </div>
            <div>
              <p className="font-subtitle text-sm text-critter-maroon">Balto</p>
              <p className="font-body text-xs text-critter-gray">Navigation Assistant</p>
            </div>
            <div className="ml-auto flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="font-body text-xs text-critter-gray">Online</span>
            </div>
          </div>

          <div className="p-4 space-y-3 max-h-[200px] overflow-y-auto bg-critter-beige/20">
            <div className="flex justify-end">
              <div className="bg-critter-maroon rounded-2xl rounded-br-sm px-4 py-2 max-w-[85%]">
                <p className="font-body text-sm text-white">Show me customers at risk of churning this month</p>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-critter-orange to-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                <Dog className="h-3 w-3 text-white" />
              </div>
              <div className="bg-white border border-critter-cream rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                <p className="font-body text-sm text-critter-maroon mb-2">Found <span className="font-subtitle text-critter-orange">12 customers</span> at risk. They haven&apos;t visited in 25+ days:</p>
                <div className="space-y-1">
                  {["Sarah M. - Last visit: 28 days", "Mike T. - Last visit: 32 days", "Emma K. - Last visit: 26 days"].map((c, i) => (
                    <div key={i} className="flex items-center gap-2 text-critter-gray text-xs font-body">
                      <AlertCircle className="h-3 w-3 text-yellow-500" />
                      {c}
                    </div>
                  ))}
                </div>
                <p className="font-body text-xs text-critter-orange mt-2">+ 9 more. Want me to draft a win-back campaign?</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Capabilities */}
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: <BarChart3 className="h-4 w-4" />, label: "Business Insights", desc: "Revenue, trends, forecasts" },
            { icon: <Mail className="h-4 w-4" />, label: "Draft Campaigns", desc: "Intelligently written" },
            { icon: <Users className="h-4 w-4" />, label: "Smart Segments", desc: "Find any customer" },
            { icon: <Sparkles className="h-4 w-4" />, label: "Recommendations", desc: "Growth suggestions" },
          ].map((cap, i) => (
            <div key={i} className="p-3 bg-critter-beige rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-critter-orange/10 flex items-center justify-center mb-2 text-critter-orange">
                {cap.icon}
              </div>
              <p className="font-subtitle text-xs text-critter-maroon">{cap.label}</p>
              <p className="font-body text-xs text-critter-gray">{cap.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 p-3 bg-critter-orange/10 rounded-xl">
          <Dog className="h-4 w-4 text-critter-orange" />
          <span className="font-body text-sm text-critter-maroon">Powered by advanced AI • Your smart guide dog</span>
        </div>
      </div>
    ),

    leadgen: (
      <div className="space-y-6">
        <div className="text-center pb-4 border-b border-critter-cream">
          <div className="w-16 h-16 rounded-full bg-critter-orange/10 flex items-center justify-center mx-auto mb-4">
            <ClipboardList className="h-8 w-8 text-critter-orange" />
          </div>
          <h3 className="font-title text-2xl text-critter-maroon">Lead Generation</h3>
          <p className="font-body text-critter-gray">Capture & convert more pet parents</p>
        </div>

        {/* Lead Form Preview */}
        <div className="bg-white rounded-xl border-2 border-critter-orange/20 overflow-hidden">
          <div className="bg-critter-orange px-4 py-3">
            <p className="font-subtitle text-sm text-white text-center">✨ New Client Special - 20% Off First Visit!</p>
          </div>
          <div className="p-4 space-y-3">
            <div className="space-y-2">
              <input className="w-full px-3 py-2 rounded-lg border border-critter-cream font-body text-sm" placeholder="Your Name" readOnly />
              <input className="w-full px-3 py-2 rounded-lg border border-critter-cream font-body text-sm" placeholder="Email" readOnly />
              <input className="w-full px-3 py-2 rounded-lg border border-critter-cream font-body text-sm" placeholder="Pet Name" readOnly />
            </div>
            <Button className="w-full bg-critter-orange hover:bg-critter-orange/90 text-white font-subtitle">
              Claim My Discount
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-critter-beige rounded-xl p-3 text-center">
            <p className="font-title text-2xl text-critter-orange">247</p>
            <p className="font-body text-xs text-critter-gray">Leads This Month</p>
          </div>
          <div className="bg-critter-beige rounded-xl p-3 text-center">
            <p className="font-title text-2xl text-critter-maroon">34%</p>
            <p className="font-body text-xs text-critter-gray">Conversion Rate</p>
          </div>
          <div className="bg-critter-beige rounded-xl p-3 text-center">
            <p className="font-title text-2xl text-green-600">$12K</p>
            <p className="font-body text-xs text-critter-gray">Lead Value</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2">
          {[
            { icon: <Link2 className="h-4 w-4" />, text: "Embeddable forms for your website" },
            { icon: <Calendar className="h-4 w-4" />, text: "Built-in scheduling integration" },
            { icon: <Zap className="h-4 w-4" />, text: "Auto-enroll leads in nurture sequences" },
            { icon: <Target className="h-4 w-4" />, text: "Track source attribution" },
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 p-2 bg-white rounded-lg border border-critter-cream">
              <div className="w-8 h-8 rounded-full bg-critter-orange/10 flex items-center justify-center text-critter-orange">
                {feature.icon}
              </div>
              <span className="font-body text-sm text-critter-maroon">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-critter-beige flex items-center justify-center hover:bg-critter-cream transition-colors"
        >
          <X className="h-4 w-4 text-critter-maroon" />
        </button>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-60px)]">
          {previews[type]}
        </div>

        {/* Navigation Footer */}
        <div className="border-t border-critter-cream p-4 bg-critter-beige flex items-center justify-between">
          <button
            onClick={() => hasPrev && onNavigate(previewTypes[currentIndex - 1])}
            className={`flex items-center gap-2 font-subtitle text-sm transition-colors ${
              hasPrev
                ? 'text-critter-maroon hover:text-critter-orange cursor-pointer'
                : 'text-critter-gray/40 cursor-not-allowed'
            }`}
            disabled={!hasPrev}
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            <span className="hidden sm:inline">{hasPrev ? previewLabels[previewTypes[currentIndex - 1]] : 'Previous'}</span>
          </button>

          {/* Dots indicator */}
          <div className="flex items-center gap-2">
            {previewTypes.map((_, i) => (
              <button
                key={i}
                onClick={() => onNavigate(previewTypes[i])}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-critter-orange' : 'bg-critter-cream hover:bg-critter-orange/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => hasNext && onNavigate(previewTypes[currentIndex + 1])}
            className={`flex items-center gap-2 font-subtitle text-sm transition-colors ${
              hasNext
                ? 'text-critter-maroon hover:text-critter-orange cursor-pointer'
                : 'text-critter-gray/40 cursor-not-allowed'
            }`}
            disabled={!hasNext}
          >
            <span className="hidden sm:inline">{hasNext ? previewLabels[previewTypes[currentIndex + 1]] : 'Next'}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
