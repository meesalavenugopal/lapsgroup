import { Building2, Mail, Phone, MapPin, Globe } from 'lucide-react';

interface IDCardProps {
  name: string;
  designation: string;
  employeeId: string;
  department: string;
  email: string;
  phone: string;
  joiningDate: string;
  photoUrl?: string;
  bloodGroup?: string;
}

export function IDCard({
  name = "John Doe",
  designation = "Senior Architect",
  employeeId = "LAPS-ARCH-001",
  department = "Architecture & Planning",
  email = "john.doe@lapsgroup.com",
  phone = "+91 98765 43210",
  joiningDate = "January 2026",
  photoUrl,
  bloodGroup = "O+",
}: IDCardProps) {
  return (
    <div className="flex gap-8 p-8">
      {/* Front Side */}
      <div className="w-[350px] h-[550px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden relative rounded-2xl">
        {/* Decorative Top Bar */}
        <div className="h-2 bg-gradient-to-r from-[#2D5016] via-[#C9A227] to-[#0A1628]"></div>
        
        {/* Header with Logo */}
        <div className="px-6 pt-5 pb-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <img 
              src="/logo-laps-architecture.png" 
              alt="LAPS Logo" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-[#0A1628] font-bold text-sm tracking-wide uppercase">LAPS GROUP</h1>
              <p className="text-gray-600 text-xs">Architecture & Planning</p>
            </div>
          </div>
        </div>

        {/* Photo and Name Section */}
        <div className="px-6 pt-6 pb-4 text-center">
          <div className="inline-block relative mb-4">
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 ring-4 ring-white shadow-lg">
              <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#2D5016] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white text-[10px] font-bold">{bloodGroup}</span>
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-[#0A1628] mb-1">{name}</h2>
          <p className="text-[#2D5016] font-semibold text-sm mb-2">{designation}</p>
          <p className="text-gray-500 text-xs uppercase tracking-wider">{department}</p>
        </div>

        {/* Employee ID */}
        <div className="mx-6 mb-4">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-3 border border-gray-200">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">ID</span>
              <span className="font-mono text-sm font-bold text-[#0A1628] tracking-wide">{employeeId}</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="px-6 space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2D5016]/5 flex items-center justify-center flex-shrink-0">
              <Mail className="w-4 h-4 text-[#2D5016]" />
            </div>
            <span className="text-xs text-gray-600 truncate">{email}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2D5016]/5 flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-[#2D5016]" />
            </div>
            <span className="text-xs text-gray-600">{phone}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="px-6 py-4 bg-gradient-to-t from-gray-50/80 to-transparent">
            <div className="text-center">
              <p className="text-[9px] text-gray-400 uppercase tracking-wider">Joined</p>
              <p className="text-xs text-gray-700 font-semibold">{joiningDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Back Side */}
      <div className="w-[350px] h-[550px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden relative rounded-2xl">
        {/* Decorative Top Bar */}
        <div className="h-2 bg-gradient-to-r from-[#0A1628] via-[#C9A227] to-[#2D5016]"></div>
        
        {/* Header */}
        <div className="px-6 pt-6 pb-5 border-b border-gray-100">
          <h2 className="text-lg font-bold text-[#0A1628] leading-tight mb-2">Architecture & Planning Studios</h2>
          <p className="text-[#C9A227] text-sm font-medium">Designing Tomorrow's Spaces</p>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center py-6">
          <div className="w-40 h-40 bg-white border-2 border-dashed border-gray-300 rounded-2xl p-3 shadow-sm">
            <div className="w-full h-full bg-[#0A1628] rounded-lg flex items-center justify-center">
              <div className="grid grid-cols-5 gap-1">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-5 h-5 ${Math.random() > 0.4 ? 'bg-white' : 'bg-[#0A1628]'}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3 uppercase tracking-wider">Scan for Verification</p>
        </div>

        {/* Company Info */}
        <div className="px-6 space-y-4 mt-2 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2D5016]/5 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 text-[#2D5016]" />
            </div>
            <div className="text-xs flex-1">
              <p className="font-bold text-[#0A1628] mb-1">The LAPS Group Headquarters</p>
              <p className="text-gray-500">Hyderabad, Telangana, India</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2D5016]/5 flex items-center justify-center flex-shrink-0">
              <Globe className="w-4 h-4 text-[#2D5016]" />
            </div>
            <div className="text-xs flex-1">
              <p className="text-gray-500">www.lapsgroup.com/architecture-planning</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2D5016]/5 flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-[#2D5016]" />
            </div>
            <div className="text-xs flex-1">
              <p className="text-gray-500">+91 40 1234 5678</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="px-6 py-4 bg-gradient-to-t from-gray-50/80 to-transparent">
            <p className="text-[9px] text-gray-400 text-center leading-relaxed">
              This card is property of LAPS Group. If found, please return to the above address.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Preview component with sample data
export function IDCardPreview() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#0A1628] text-center mb-2">
          Employee ID Card
        </h1>
        <p className="text-gray-500 text-center mb-8">
          LAPS - Architecture & Planning Studios
        </p>
        
        <div className="flex justify-center">
          <IDCard
            name="Venugopal Meesala"
            designation="Principal Architect"
            employeeId="LAPS-ARCH-001"
            department="Architecture & Planning"
            email="venugopal.meesala@lapsgroup.com"
            phone="+91 98765 43210"
            joiningDate="January 2026"
            photoUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
            bloodGroup="O+"
          />
        </div>

        {/* Print Button */}
        <div className="text-center mt-8">
          <button 
            onClick={() => window.print()}
            className="bg-[#2D5016] text-white px-8 py-3 font-semibold hover:bg-[#3d6b1f] transition-colors"
          >
            Print ID Card
          </button>
        </div>
      </div>
    </div>
  );
}
