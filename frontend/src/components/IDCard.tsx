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
      <div className="w-[350px] h-[550px] bg-white shadow-2xl overflow-hidden relative">
        {/* Header with Logo and Pattern */}
        <div className="bg-gradient-to-br from-[#2D5016] to-[#1a3009] h-[140px] relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 border-[20px] border-white/30 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-[15px] border-white/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
          
          {/* Logo and Company Name */}
          <div className="relative z-10 px-6 py-5 flex items-center gap-3">
            <img 
              src="/logo-laps-architecture.png" 
              alt="LAPS Logo" 
              className="w-14 h-14 object-contain bg-white/10 p-1.5 backdrop-blur-sm rounded"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-white font-bold text-lg tracking-wide leading-tight">LAPS GROUP</h1>
              <p className="text-white/80 text-sm leading-tight">Architecture & Planning Studios</p>
            </div>
          </div>
          
          {/* Gold accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A227] via-[#E5B82A] to-[#C9A227]"></div>
        </div>

        {/* Photo Section */}
        <div className="relative -mt-12 flex justify-center z-20">
          <div className="w-28 h-28 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
            {photoUrl ? (
              <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                <span className="text-4xl font-bold text-gray-500">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Employee Details */}
        <div className="px-6 pt-4 text-center">
          <h2 className="text-2xl font-bold text-[#0A1628] tracking-wide">{name}</h2>
          <p className="text-[#2D5016] font-semibold text-lg mt-1">{designation}</p>
          <p className="text-gray-500 text-sm mt-1">{department}</p>
        </div>

        {/* ID Badge */}
        <div className="mx-6 mt-4 bg-gradient-to-r from-[#0A1628] to-[#1a2d4a] text-white py-2 px-4 text-center">
          <span className="text-xs text-white/70">Employee ID</span>
          <p className="font-mono font-bold tracking-wider">{employeeId}</p>
        </div>

        {/* Contact Info */}
        <div className="px-6 mt-4 space-y-2.5">
          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-5 flex items-center justify-center flex-shrink-0">
              <Mail className="w-4 h-4 text-[#2D5016]" />
            </div>
            <span className="text-sm truncate">{email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-5 flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-[#2D5016]" />
            </div>
            <span className="text-sm">{phone}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#F8FAFC] border-t border-gray-200 px-6 py-3">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <span className="font-medium">Joined: {joiningDate}</span>
            <span className="bg-red-100 text-red-700 px-2 py-1 font-semibold rounded text-[11px]">
              Blood: {bloodGroup}
            </span>
          </div>
        </div>
      </div>

      {/* Back Side */}
      <div className="w-[350px] h-[550px] bg-white shadow-2xl overflow-hidden relative">
        {/* Header Pattern */}
        <div className="bg-gradient-to-br from-[#0A1628] to-[#1a2d4a] h-[100px] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-10 -right-10 w-40 h-40 border-[25px] border-white/30 rounded-full"></div>
          </div>
          <div className="relative z-10 px-6 py-5 flex flex-col justify-center h-full">
            <h2 className="text-white font-bold text-lg leading-tight">LAPS - Architecture &</h2>
            <h2 className="text-white font-bold text-lg leading-tight">Planning Studios</h2>
            <p className="text-[#C9A227] text-sm mt-1.5">Designing Tomorrow's Spaces</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A227] via-[#E5B82A] to-[#C9A227]"></div>
        </div>

        {/* QR Code Section */}
        <div className="flex justify-center mt-6">
          <div className="w-32 h-32 bg-white border-2 border-gray-200 p-2 shadow-inner">
            {/* QR Code Placeholder */}
            <div className="w-full h-full bg-[#0A1628] flex items-center justify-center">
              <div className="grid grid-cols-5 gap-1">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 ${
                      Math.random() > 0.4 ? 'bg-white' : 'bg-[#0A1628]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">Scan for verification</p>

        {/* Company Info */}
        <div className="px-6 mt-5 space-y-3">
          <div className="flex items-start gap-3 text-gray-600">
            <div className="w-5 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4 text-[#2D5016]" />
            </div>
            <div className="text-sm leading-relaxed">
              <p className="font-semibold text-[#0A1628]">Head Office</p>
              <p>LAPS Group Headquarters</p>
              <p>Hyderabad, Telangana, India</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-gray-600">
            <div className="w-5 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Globe className="w-4 h-4 text-[#2D5016]" />
            </div>
            <div className="text-sm leading-relaxed">
              <p className="font-semibold text-[#0A1628]">Website</p>
              <p>www.architecture.lapsgroup.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-gray-600">
            <div className="w-5 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Phone className="w-4 h-4 text-[#2D5016]" />
            </div>
            <div className="text-sm leading-relaxed">
              <p className="font-semibold text-[#0A1628]">Contact</p>
              <p>+91 40 1234 5678</p>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#F8FAFC] border-t border-gray-200 px-6 py-3">
          <p className="text-[10px] text-gray-400 text-center leading-relaxed">
            This card is the property of LAPS Group. If found, please return to the address above.
            Unauthorized use is prohibited.
          </p>
        </div>

        {/* Decorative Bottom Pattern */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2 opacity-20">
          <div className="w-2 h-2 bg-[#2D5016] rounded-full"></div>
          <div className="w-2 h-2 bg-[#C9A227] rounded-full"></div>
          <div className="w-2 h-2 bg-[#0A1628] rounded-full"></div>
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
            email="venugopal@lapsgroup.com"
            phone="+91 98765 43210"
            joiningDate="January 2026"
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
