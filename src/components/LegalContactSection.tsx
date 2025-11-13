import { Mail } from 'lucide-react';

export function LegalContactSection() {
  return (
    <div className="bg-primary text-primary-foreground rounded-[14px] p-8">
      <div className="flex items-start gap-3 mb-6">
        <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
        <h2 className="text-secondary">Contact Us</h2>
      </div>
      
      <p className="leading-relaxed mb-4 text-primary-foreground">
        If you have any questions, please contact us:
      </p>
      <div className="space-y-2 text-primary-foreground">
        <p><strong>Email:</strong> legal@suppl.me</p>
        <p><strong>Phone:</strong> (415) 289-5055 / 800</p>
        <div>
          <p><strong>Address:</strong></p>
          <p>Trivalora Inc.</p>
          <p>2261 Market Street STE 85938</p>
          <p>San Francisco, CA 94114</p>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
}
