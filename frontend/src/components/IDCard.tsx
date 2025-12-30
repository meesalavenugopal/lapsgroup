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
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url(/id-background.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
        
        {/* Content */}
        <div className="relative z-10">
        {/* Header with Gradient Background */}
        <div className="bg-gradient-to-br from-[#0A1628] via-[#1a2d45] to-[#2D5016] px-6 py-6 text-center relative overflow-hidden">
          {/* Decorative accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A227] via-white to-[#C9A227]"></div>
          
          <div className="flex items-center justify-center gap-4">
            <img 
              src="/logo-laps-architecture.png" 
              alt="LAPS Logo" 
              className="w-14 h-14 object-contain drop-shadow-xl"
            />
            <div className="text-left">
              <h1 className="text-white font-bold text-lg tracking-wider uppercase leading-tight">LAPS GROUP</h1>
              <p className="text-[#C9A227] text-xs font-medium tracking-wide">Architecture & Planning</p>
            </div>
          </div>
        </div>

        {/* Photo and Name Section */}
        <div className="px-6 pt-5 pb-4 text-center">
          <div className="inline-block relative mb-3">
            <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 ring-2 ring-white shadow-lg">
              <img src={photoUrl} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1.5 -right-1.5 w-9 h-9 bg-[#2D5016] rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white text-xs font-bold">{bloodGroup}</span>
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-[#0A1628] mb-1.5">{name}</h2>
          <p className="text-[#2D5016] font-semibold text-sm">{designation}</p>
        </div>

        {/* Employee ID */}
        <div className="mx-6 mb-4">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-2.5 border-2 border-dashed border-gray-300">
            <div className="flex items-center justify-center gap-2">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">ID</span>
              <span className="font-mono text-sm font-bold text-[#0A1628] tracking-wide">{employeeId}</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="px-6 space-y-2.5 mb-20">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#2D5016]/5 flex items-center justify-center flex-shrink-0">
              <Mail className="w-4 h-4 text-[#2D5016]" />
            </div>
            <span className="text-xs text-gray-600 truncate">{email}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#2D5016]/5 flex items-center justify-center flex-shrink-0">
              <Phone className="w-4 h-4 text-[#2D5016]" />
            </div>
            <span className="text-[11px] text-gray-600">{phone}</span>
          </div>
        </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="px-6 py-4 bg-gradient-to-t from-gray-50/90 to-transparent backdrop-blur-sm">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-[9px] text-gray-400 uppercase tracking-wider">Joined</p>
                <p className="text-xs text-gray-700 font-semibold">{joiningDate}</p>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3 h-3 text-[#2D5016]" />
                <p className="text-[10px] text-gray-600">www.lapsgroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back Side */}
      <div className="w-[350px] h-[550px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden relative rounded-2xl">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url(/id-background.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
        
        {/* Content */}
        <div className="relative z-10">
        {/* Header with Gradient Background */}
        <div className="bg-gradient-to-br from-[#2D5016] via-[#3d6b1f] to-[#0A1628] px-6 py-5 text-center relative overflow-hidden">
          {/* Decorative accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-[#C9A227] to-white"></div>
          
          <div className="flex flex-col items-center gap-1.5">
            <img 
              src="/logo-laps-architecture.png" 
              alt="LAPS Logo" 
              className="w-16 h-16 object-contain drop-shadow-xl mb-1"
            />
            <div className="space-y-1.5">
              <h2 className="text-white font-bold text-base leading-tight tracking-wide text-center">Designing Tomorrow's Spaces</h2>
              <div className="h-px w-28 bg-[#C9A227] mx-auto"></div>
              <p className="text-[#C9A227] text-xs font-medium tracking-wide text-center">Landscape • Architecture • Planning Studios</p>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center py-5">
          <div className="w-32 h-32 bg-white border-2 border-dashed border-gray-300 rounded-xl p-2 shadow-sm">
            <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-lg flex items-center justify-center">
              <div className="grid grid-cols-6 gap-0.5">
                {Array.from({ length: 36 }).map((_, i) => {
                  const colors = ['bg-[#C9A227]', 'bg-[#2D5016]', 'bg-[#0A1628]', 'bg-[#8B7355]', 'bg-[#6B8E23]', 'bg-[#4A5D23]'];
                  const row = Math.floor(i / 6);
                  const col = i % 6;
                  // Create diagonal stripe pattern
                  const diagonal = (row + col) % 3;
                  // Corner markers (like real QR codes)
                  const isCorner = (row < 2 && col < 2) || (row < 2 && col > 3) || (row > 3 && col < 2);
                  const colorIndex = isCorner ? 2 : diagonal; // Navy corners, diagonal colors for rest
                  return (
                    <div
                      key={i}
                      className={`w-4 h-4 ${colors[colorIndex]} rounded-sm ${isCorner ? 'ring-1 ring-white' : ''}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <p className="text-[10px] text-gray-400 mt-2 uppercase tracking-wider">Scan for Verification</p>
        </div>

        {/* Company Info */}
        <div className="px-6 space-y-2.5 pb-16">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#2D5016]/5 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#2D5016]" />
            </div>
            <div className="text-[10px] flex-1">
              <p className="font-bold text-[#0A1628] mb-0.5">The LAPS Group Headquarters</p>
              <p className="text-gray-500">Hyderabad, Telangana, India</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#2D5016]/5 flex items-center justify-center flex-shrink-0">
              <Globe className="w-3.5 h-3.5 text-[#2D5016]" />
            </div>
            <div className="text-[10px] flex-1">
              <p className="text-gray-500 break-all leading-tight">www.lapsgroup.com/architecture-planning</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#2D5016]/5 flex items-center justify-center flex-shrink-0">
              <Phone className="w-3.5 h-3.5 text-[#2D5016]" />
            </div>
            <div className="text-[10px] flex-1">
              <p className="text-gray-500">+91 40 1234 5678</p>
            </div>
          </div>
        </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          <div className="px-6 py-3 bg-gradient-to-t from-gray-50/90 to-transparent backdrop-blur-sm">
            <p className="text-[8px] text-gray-400 text-center leading-relaxed">
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
    <>
      <style>{`
        @media print {
          @page {
            size: landscape;
            margin: 5mm;
          }
          
          html, body {
            background: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          .no-print {
            display: none !important;
          }
          
          body > div,
          #root,
          .min-h-screen {
            min-height: auto !important;
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          
          .bg-gray-100,
          [class*="bg-gray"] {
            background: white !important;
          }
          
          #id-cards-container {
            padding: 0 !important;
            background: white !important;
          }
          
          .shadow-\\[0_8px_30px_rgb\\(0\\2c 0\\2c 0\\2c 0\\.12\\)\\] {
            box-shadow: none !important;
          }
        }
      `}</style>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#0A1628] text-center mb-2 no-print">
            Employee ID Card
          </h1>
          <p className="text-gray-500 text-center mb-8 no-print">
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
        <div className="text-center mt-8 no-print">
          <button 
            onClick={() => window.print()}
            className="bg-[#2D5016] text-white px-8 py-3 font-semibold hover:bg-[#3d6b1f] transition-colors"
          >
            Print ID Card
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
