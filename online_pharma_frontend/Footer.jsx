import { MapPin, Phone, Mail, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* About IPEK */}
        <div>
          <h3 className="font-bold mb-4 uppercase text-sm">About IPEK</h3>
          <ul className="text-sm space-y-2">
            <li>Company</li>
            <li>Team</li>
            <li>Jobs</li>
            <li>Distributors</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold mb-4 uppercase text-sm">Resources</h3>
          <ul className="text-sm space-y-2">
            <li>Events</li>
            <li>Articles</li>
            <li>Insights</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-bold mb-4 uppercase text-sm">Information</h3>
          <ul className="text-sm space-y-2">
            <li>Sales Shop</li>
            <li>Partner Log In</li>
          </ul>
        </div>

        {/* Helpful Links */}
        <div>
          <h3 className="font-bold mb-4 uppercase text-sm">Helpful Links</h3>
          <ul className="text-sm space-y-2">
            <li>Imprint</li>
            <li>Data protection</li>
            <li>General terms and conditions (For iPEK Customer)</li>
            <li>General Conditions Of Purchase For Suppliers</li>
          </ul>
        </div>

      </div>

      <hr className="border-gray-700 my-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 text-sm">

        {/* IPEK Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/path-to-ipek-logo.png"
            alt="iPEK Logo"
            className="h-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* IPEK International GMBH */}
          <div>
            <h4 className="font-bold mb-3 uppercase text-xs">Get In Touch IPEK International GmbH</h4>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> See, Gewerbepark 22, 87477 Sulzberg Germany
            </p>
            <p className="flex items-center gap-2 mt-1">
              <Phone size={16} /> +49 8376 92180-0
            </p>
            <p className="flex items-center gap-2 mt-1">
              <FileText size={16} /> Fax +49 8376 92180-21
            </p>
            <p className="flex items-center gap-2 mt-1">
              <Mail size={16} /> isg_info@idexcorp.com
            </p>
          </div>

          {/* IPEK SPEZIAL TV GMBH */}
          <div>
            <h4 className="font-bold mb-3 uppercase text-xs">IPEK SPEZIAL TV GMBH</h4>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Dürenbodenstraße 7 A-6992/D-87568 Hirschegg
            </p>
            <p className="flex items-center gap-2 mt-1">
              <Phone size={16} /> +43 5517 3125
            </p>
            <p className="flex items-center gap-2 mt-1">
              <FileText size={16} /> Fax +43 5517 3126
            </p>
          </div>

        </div>

        {/* IDEX Corporation logo and jobs buttons */}
        <div className="flex flex-col items-end space-y-4">
          <img
            src="/path-to-idex-logo.png"
            alt="IDEX Corporation Logo"
            className="h-10 w-auto"
          />
          <button className="bg-red-600 hover:bg-red-700 rounded-full text-white py-2 px-6 text-xs font-bold">
            JOBS
          </button>
        </div>

      </div>

      {/* Floating contact buttons - optional, positioned absolute */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4">
        <button className="bg-red-600 hover:bg-red-700 rounded-full w-12 h-12 text-white text-xs font-bold">JOBS</button>
        <button className="bg-red-600 hover:bg-red-700 rounded-full w-12 h-12 text-white flex items-center justify-center">
          <Phone size={20} />
        </button>
        <button className="bg-red-600 hover:bg-red-700 rounded-full w-12 h-12 text-white flex items-center justify-center">
          <Mail size={20} />
        </button>
      </div>
    </footer>
  );
}
