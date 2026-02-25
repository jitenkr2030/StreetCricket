'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TeamManagement } from '@/components/teams/TeamManagement'
import { MatchManagement } from '@/components/matches/MatchManagement'
import { GroundBooking } from '@/components/grounds/GroundBooking'
import { PaymentHistory } from '@/components/payments/PaymentHistory'
import { TournamentManagement } from '@/components/tournaments/TournamentManagement'
import { MediaUpload } from '@/components/media/MediaUpload'
import { MediaGallery } from '@/components/media/MediaGallery'
import { PlayerRankings } from '@/components/rankings/PlayerRankings'
import { AwardsAndAchievements } from '@/components/rankings/AwardsAndAchievements'
import { DisputeManagement } from '@/components/disputes/DisputeManagement'
import { AdminDashboard } from '@/components/admin/AdminDashboard'
import { AuthModal } from '@/components/auth/AuthModal'
import { useAuth } from '@/contexts/AuthContext'
import { 
  Trophy, 
  Users, 
  Calendar, 
  MapPin, 
  IndianRupee, 
  Shield, 
  Star,
  Target,
  TrendingUp,
  Award,
  Video,
  Gavel,
  Gamepad2,
  LogOut,
  User,
  ImageIcon,
  Scale,
  BarChart3
} from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showAuthModal, setShowAuthModal] = useState(false)
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">StreetCricket Pro</h1>
                <p className="text-sm text-gray-600">Professional Cricket Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium">{user.name}</span>
                    <Badge variant={user.isVerified ? "default" : "secondary"} className="text-xs">
                      {user.role.replace('_', ' ')}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm" onClick={logout}>
                    <LogOut className="w-4 h-4 mr-1" />
                    Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Button variant="outline" onClick={() => setShowAuthModal(true)}>
                    Login
                  </Button>
                  <Button onClick={() => setShowAuthModal(true)}>
                    Register Team
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-200">
            🏏 Premium Local Cricket Platform
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Play Professional Cricket in Your Local Area
            <span className="text-green-600"> & Win Real Cash Prizes</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join serious teams, compete in professional matches, and earn real money. 
            Like a mini IPL at your colony level with ₹10,000+ prize pools per match.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" onClick={() => setShowAuthModal(true)}>
              <Trophy className="w-5 h-5 mr-2" />
              Create Your Team
            </Button>
            <Button size="lg" variant="outline" onClick={() => setActiveTab('matches')}>
              <Calendar className="w-5 h-5 mr-2" />
              Browse Matches
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-12 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="teams">Teams</TabsTrigger>
              <TabsTrigger value="matches">Matches</TabsTrigger>
              <TabsTrigger value="grounds">Grounds</TabsTrigger>
              <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="rankings">Rankings</TabsTrigger>
              <TabsTrigger value="awards">Awards</TabsTrigger>
              <TabsTrigger value="disputes">Disputes</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
              <TabsTrigger value="payments">Payments</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Core Features</h3>
                <p className="text-gray-600">Everything you need for professional cricket management</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <Users className="w-8 h-8 text-blue-600 mb-2" />
                    <CardTitle>Team Management</CardTitle>
                    <CardDescription>Create professional team profiles with 11-15 players</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Player statistics tracking</li>
                      <li>• Team verification badges</li>
                      <li>• Local area rankings</li>
                      <li>• Professional team profiles</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Target className="w-8 h-8 text-green-600 mb-2" />
                    <CardTitle>Match Challenges</CardTitle>
                    <CardDescription>Challenge teams or accept open challenges</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Set date, time & ground</li>
                      <li>• Choose match format</li>
                      <li>• Instant accept option</li>
                      <li>• Auto-cancellation penalties</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <IndianRupee className="w-8 h-8 text-yellow-600 mb-2" />
                    <CardTitle>Prize Pool System</CardTitle>
                    <CardDescription>Real cash prizes with secure payments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• ₹10,000 minimum entry</li>
                      <li>• 10% platform commission</li>
                      <li>• Escrow payment protection</li>
                      <li>• Instant prize payouts</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <MapPin className="w-8 h-8 text-purple-600 mb-2" />
                    <CardTitle>Ground Booking</CardTitle>
                    <CardDescription>Premium cricket grounds across Delhi</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Real-time availability</li>
                      <li>• Floodlight options</li>
                      <li>• Best price guarantee</li>
                      <li>• 5-15% commission earnings</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <TrendingUp className="w-8 h-8 text-red-600 mb-2" />
                    <CardTitle>Live Scoring</CardTitle>
                    <CardDescription>Ball-by-ball scoring with live updates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Real-time score updates</li>
                      <li>• WhatsApp sharing</li>
                      <li>• Auto stats calculation</li>
                      <li>• Professional scorecards</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Trophy className="w-8 h-8 text-orange-600 mb-2" />
                    <CardTitle>Tournament Mode</CardTitle>
                    <CardDescription>Multi-team tournaments with big prizes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• 8/16 team tournaments</li>
                      <li>• Knockout & league formats</li>
                      <li>• ₹80,000+ prize pools</li>
                      <li>• Points tables & leaderboards</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="teams">
              {user ? (
                <TeamManagement />
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Login Required</h3>
                    <p className="text-gray-600 mb-4">
                      Please login or register to view and manage teams
                    </p>
                    <Button onClick={() => setShowAuthModal(true)}>
                      Login / Register
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="matches">
              {user ? (
                <MatchManagement />
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Login Required</h3>
                    <p className="text-gray-600 mb-4">
                      Please login or register to view and manage matches
                    </p>
                    <Button onClick={() => setShowAuthModal(true)}>
                      Login / Register
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="grounds">
              {user ? (
                <GroundBooking />
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Login Required</h3>
                    <p className="text-gray-600 mb-4">
                      Please login or register to book cricket grounds
                    </p>
                    <Button onClick={() => setShowAuthModal(true)}>
                      Login / Register
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="rankings">
              {user ? (
                <PlayerRankings />
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Login Required</h3>
                    <p className="text-gray-600 mb-4">
                      Please login or register to view player and team rankings
                    </p>
                    <Button onClick={() => setShowAuthModal(true)}>
                      Login / Register
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="awards">
              {user ? (
                <AwardsAndAchievements />
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Award className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Login Required</h3>
                    <p className="text-gray-600 mb-4">
                      Please login or register to view awards and achievements
                    </p>
                    <Button onClick={() => setShowAuthModal(true)}>
                      Login / Register
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="media">
              {user ? (
                <div className="space-y-6">
                  <MediaUpload 
                    type="MATCH_PHOTO"
                    entityId="demo-match"
                    entityType="Match"
                    onUploadComplete={(media) => {
                      console.log('Media uploaded:', media)
                    }}
                  />
                  <MediaGallery />
                </div>
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Login Required</h3>
                    <p className="text-gray-600 mb-4">
                      Please login or register to upload and view media
                    </p>
                    <Button onClick={() => setShowAuthModal(true)}>
                      Login / Register
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="disputes">
              {user ? (
                <DisputeManagement />
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Scale className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Login Required</h3>
                    <p className="text-gray-600 mb-4">
                      Please login or register to view and manage disputes
                    </p>
                    <Button onClick={() => setShowAuthModal(true)}>
                      Login / Register
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="admin">
              {user ? (
                <AdminDashboard />
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <BarChart3 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Admin Access Required</h3>
                    <p className="text-gray-600 mb-4">
                      Please login with admin credentials to access the dashboard
                    </p>
                    <Button onClick={() => setShowAuthModal(true)}>
                      Login as Admin
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="payments">
              {user ? (
                <PaymentHistory />
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <IndianRupee className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Login Required</h3>
                    <p className="text-gray-600 mb-4">
                      Please login or register to view payment history
                    </p>
                    <Button onClick={() => setShowAuthModal(true)}>
                      Login / Register
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="tournaments">
              {user ? (
                <TournamentManagement />
              ) : (
                <Card>
                  <CardContent className="py-12 text-center">
                    <Trophy className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Login Required</h3>
                    <p className="text-gray-600 mb-4">
                      Please login or register to view and manage tournaments
                    </p>
                    <Button onClick={() => setShowAuthModal(true)}>
                      Login / Register
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="earnings" className="space-y-6">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Revenue Model</h3>
                <p className="text-gray-600">How StreetCricket Pro generates revenue</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <IndianRupee className="w-5 h-5 text-green-600" />
                      Per Match Earnings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">Example Match</p>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span>Team A Entry:</span>
                            <span className="font-medium">₹10,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Team B Entry:</span>
                            <span className="font-medium">₹10,000</span>
                          </div>
                          <div className="flex justify-between font-bold">
                            <span>Total Prize Pool:</span>
                            <span>₹20,000</span>
                          </div>
                          <div className="flex justify-between text-green-600">
                            <span>Your Commission (10%):</span>
                            <span className="font-bold">₹2,000</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        <strong>5 matches/day = ₹10,000/day = ₹3,00,000/month</strong>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-yellow-600" />
                      Tournament Earnings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-yellow-50 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">8-Team Tournament</p>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span>Entry per team:</span>
                            <span className="font-medium">₹10,000</span>
                          </div>
                          <div className="flex justify-between">
                            <span>8 teams × ₹10,000:</span>
                            <span className="font-medium">₹80,000</span>
                          </div>
                          <div className="flex justify-between text-yellow-600">
                            <span>Your Commission (10%):</span>
                            <span className="font-bold">₹8,000</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        <strong>10 tournaments/month = ₹80,000 extra</strong>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Trust & Fair Play</h3>
            <p className="text-gray-600">Professional standards with dispute resolution</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Gavel className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Dispute System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Match rules fixed beforehand, umpire selection, and admin review panel for disputes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Secure Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  UPI/Razorpay integration with escrow protection. Money released only after match completion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Star className="w-8 h-8 text-yellow-600 mb-2" />
                <CardTitle>No-Show Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Opponent gets walkover win + penalty fee deduction if team doesn't show up.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-green-600">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Play Professional Cricket?
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join serious cricket teams in your area, compete in professional matches, 
            and win real cash prizes. This is not gully cricket - this is the real deal.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100" onClick={() => setShowAuthModal(true)}>
            Register Your Team Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Gamepad2 className="w-6 h-6" />
                <span className="font-bold">StreetCricket Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional cricket platform for serious teams in Delhi NCR.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Create Team</a></li>
                <li><a href="#" className="hover:text-white">Browse Matches</a></li>
                <li><a href="#" className="hover:text-white">Tournaments</a></li>
                <li><a href="#" className="hover:text-white">Grounds</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Rules & Guidelines</a></li>
                <li><a href="#" className="hover:text-white">Dispute Resolution</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Payment Policy</a></li>
                <li><a href="#" className="hover:text-white">Fair Play Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 StreetCricket Pro. All rights reserved. Play Professional Cricket.</p>
          </div>
        </div>
      </footer>

      {/* Auth Modal */}
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </div>
  )
}