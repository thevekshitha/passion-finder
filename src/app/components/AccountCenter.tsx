import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import { User, Mail, Phone, MapPin, Calendar, Shield, CreditCard, Bell, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

interface UserAccount {
  name: string;
  email: string;
  phone?: string;
  dateOfBirth?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  bio?: string;
}

interface AccountCenterProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: UserAccount;
  onUpdateUser: (user: UserAccount) => void;
}

export function AccountCenter({ open, onOpenChange, user, onUpdateUser }: AccountCenterProps) {
  const [formData, setFormData] = useState<UserAccount>(user);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Validate mandatory fields
    if (!formData.name || !formData.email) {
      toast.error('Please fill in all mandatory fields');
      return;
    }

    onUpdateUser(formData);
    setIsEditing(false);
    toast.success('Account details updated successfully!');
  };

  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const isMandatoryFieldComplete = (field: string | undefined) => {
    return field && field.trim() !== '';
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Account Center</DialogTitle>
          <DialogDescription>
            Manage your account settings and personal information
          </DialogDescription>
        </DialogHeader>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Overview</CardTitle>
                <CardDescription>Your public profile information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback className="bg-gradient-to-br from-purple-600 to-blue-600 text-white text-2xl">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl mb-1">{user.name}</h3>
                    <p className="text-gray-600 mb-3">{user.email}</p>
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600">
                      Premium Member
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t">
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea
                      id="bio"
                      placeholder="Tell us about yourself..."
                      value={formData.bio || ''}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      disabled={!isEditing}
                      className="w-full min-h-[100px] p-3 rounded-md border border-gray-300 disabled:bg-gray-50 disabled:text-gray-600"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Personal Info Tab */}
          <TabsContent value="personal" className="space-y-6 mt-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    <span className="text-red-500">*</span> indicates mandatory fields
                  </CardDescription>
                </div>
                <Button
                  onClick={() => {
                    if (isEditing) {
                      handleSave();
                    } else {
                      setIsEditing(true);
                    }
                  }}
                  variant={isEditing ? "default" : "outline"}
                >
                  {isEditing ? 'Save Changes' : 'Edit Details'}
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Mandatory Fields Section */}
                <div className="space-y-4 pb-6 border-b">
                  <h4 className="font-semibold flex items-center gap-2">
                    Mandatory Information
                    {isMandatoryFieldComplete(formData.name) && 
                     isMandatoryFieldComplete(formData.email) && 
                     isMandatoryFieldComplete(formData.phone) && 
                     isMandatoryFieldComplete(formData.dateOfBirth) && (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    )}
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={!isEditing}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={!isEditing}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone || ''}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        disabled={!isEditing}
                        required
                      />
                      {!isMandatoryFieldComplete(formData.phone) && (
                        <p className="text-xs text-orange-600">Required for account verification</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dob" className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Date of Birth <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="dob"
                        type="date"
                        value={formData.dateOfBirth || ''}
                        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                        disabled={!isEditing}
                        required
                      />
                      {!isMandatoryFieldComplete(formData.dateOfBirth) && (
                        <p className="text-xs text-orange-600">Required for age verification</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Optional Address Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Address Information (Optional)
                  </h4>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Street Address</Label>
                      <Input
                        id="address"
                        type="text"
                        placeholder="123 Main Street"
                        value={formData.address || ''}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        disabled={!isEditing}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          type="text"
                          placeholder="New York"
                          value={formData.city || ''}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="state">State/Province</Label>
                        <Input
                          id="state"
                          type="text"
                          placeholder="NY"
                          value={formData.state || ''}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                        <Input
                          id="zipCode"
                          type="text"
                          placeholder="10001"
                          value={formData.zipCode || ''}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Input
                          id="country"
                          type="text"
                          placeholder="United States"
                          value={formData.country || ''}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Security Settings
                </CardTitle>
                <CardDescription>Manage your password and security preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold mb-1">Password</h4>
                    <p className="text-sm text-gray-600">Last changed 30 days ago</p>
                  </div>
                  <Button variant="outline">Change Password</Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold mb-1">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-600">Add an extra layer of security</p>
                  </div>
                  <Button variant="outline">Enable 2FA</Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold mb-1">Active Sessions</h4>
                    <p className="text-sm text-gray-600">Manage your devices</p>
                  </div>
                  <Button variant="outline">View All</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>Choose what updates you want to receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold mb-1">Email Notifications</h4>
                    <p className="text-sm text-gray-600">Receive updates about courses and sessions</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold mb-1">Live Session Reminders</h4>
                    <p className="text-sm text-gray-600">Get notified before sessions start</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold mb-1">Marketing Communications</h4>
                    <p className="text-sm text-gray-600">Promotional offers and newsletters</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Billing Information
                </CardTitle>
                <CardDescription>Manage your payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold mb-1">Payment Methods</h4>
                    <p className="text-sm text-gray-600">No payment method added</p>
                  </div>
                  <Button variant="outline">Add Method</Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold mb-1">Billing History</h4>
                    <p className="text-sm text-gray-600">View your invoices</p>
                  </div>
                  <Button variant="outline">View History</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {isEditing && (
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button
              variant="outline"
              onClick={() => {
                setFormData(user);
                setIsEditing(false);
              }}
            >
              Cancel
            </Button>
            <Button onClick={handleSave}>
              Save All Changes
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
