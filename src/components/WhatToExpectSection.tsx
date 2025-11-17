import { LucideIcon, UtensilsCrossed } from 'lucide-react';

interface OutcomeRow {
  icon: LucideIcon | 'happy' | 'performance';
  iconLabel: string;
  usage: string;
  usageFrequency?: '2x' | '3x' | '4x'; // Optional frequency indicator
  usageDelivery?: 'IV' | 'oral' | 'topical'; // Optional delivery method
  bestTime?: string;
  resultsWeeks: string;
  intensity: 'Low' | 'Low to Moderate' | 'Moderate' | 'Moderate to High' | 'High';
  signsOfEffectiveness?: string;
}

// Default standardized disclaimer text
const DEFAULT_DISCLAIMER = "Effects vary by individual. Consult healthcare provider before starting.";

interface WhatToExpectSectionProps {
  whatToExpectData: {
    outcomes: OutcomeRow[];
    disclaimer?: string;
    signsOfEffectiveness?: string;
  };
}

function IntensityBar({ intensity }: { intensity: string }) {
  // Determine visual representation based on intensity level
  let bars = 1;
  let barHeights = [12, 16, 20]; // small, medium, large
  let coloredBars = [true, false, false]; // Which bars are colored
  
  if (intensity === 'High') {
    coloredBars = [true, true, true]; // All three colored
  } else if (intensity === 'Moderate to High') {
    coloredBars = [true, true, false]; // First two colored, third half-colored (handled separately)
  } else if (intensity === 'Moderate') {
    coloredBars = [true, true, false]; // First two colored
  } else if (intensity === 'Low to Moderate') {
    coloredBars = [true, false, false]; // First colored, second half-colored (handled separately)
  } else if (intensity === 'Low') {
    coloredBars = [true, false, false]; // Only first colored
  }
  
  return (
    <div 
      className="relative rounded-full border h-[3rem] w-full max-w-[207px]"
      style={{
        backgroundColor: 'var(--tertiary)',
        borderColor: 'var(--border)'
      }}
    >
      {/* Bars - small, medium, large */}
      <div className="absolute flex gap-[5px] h-[20px] items-end left-[14px] top-1/2 -translate-y-1/2 z-10">
        {/* First bar - small (12px) */}
        <div 
          className={coloredBars[0] ? "bg-[#4a7c59] dark:bg-[#66bb6a]" : ""}
          style={{ 
            height: `${barHeights[0]}px`,
            backgroundColor: coloredBars[0] ? undefined : 'var(--border)',
            width: '5px',
            borderRadius: '9999px'
          }}
        />
        
        {/* Second bar - medium (16px) */}
        {intensity === 'Low to Moderate' ? (
          // Half-colored bar for Low to Moderate
          <div style={{ height: `${barHeights[1]}px`, width: '5px', position: 'relative' }}>
            <div style={{ 
              position: 'absolute',
              bottom: 0,
              width: '5px',
              height: '50%',
              backgroundColor: '#4a7c59',
              borderRadius: '9999px'
            }} className="dark:bg-[#66bb6a]" />
            <div style={{ 
              position: 'absolute',
              top: 0,
              width: '5px',
              height: '50%',
              backgroundColor: 'var(--border)',
              borderRadius: '9999px'
            }} />
          </div>
        ) : (
          <div 
            className={coloredBars[1] ? "bg-[#4a7c59] dark:bg-[#66bb6a]" : ""}
            style={{ 
              height: `${barHeights[1]}px`,
              backgroundColor: coloredBars[1] ? undefined : 'var(--border)',
              width: '5px',
              borderRadius: '9999px'
            }}
          />
        )}
        
        {/* Third bar - large (20px) */}
        {intensity === 'Moderate to High' ? (
          // Half-colored bar for Moderate to High
          <div style={{ height: `${barHeights[2]}px`, width: '5px', position: 'relative' }}>
            <div style={{ 
              position: 'absolute',
              bottom: 0,
              width: '5px',
              height: '50%',
              backgroundColor: '#4a7c59',
              borderRadius: '9999px'
            }} className="dark:bg-[#66bb6a]" />
            <div style={{ 
              position: 'absolute',
              top: 0,
              width: '5px',
              height: '50%',
              backgroundColor: 'var(--border)',
              borderRadius: '9999px'
            }} />
          </div>
        ) : (
          <div 
            className={coloredBars[2] ? "bg-[#4a7c59] dark:bg-[#66bb6a]" : ""}
            style={{ 
              height: `${barHeights[2]}px`,
              backgroundColor: coloredBars[2] ? undefined : 'var(--border)',
              width: '5px',
              borderRadius: '9999px'
            }}
          />
        )}
      </div>
      
      {/* Label - Text positioned to the right of bars */}
      <div className="absolute left-[40px] right-[8px] top-0 bottom-0 flex items-center justify-center">
        <p 
          className="font-['Inter'] font-normal text-foreground text-center leading-none whitespace-nowrap w-full px-1"
          style={{
            fontSize: intensity.length >= 15 ? '5.5px' : intensity.length > 12 ? '6.5px' : intensity.length > 10 ? '7.5px' : intensity.length > 8 ? '8.5px' : '9.5px'
          }}
        >
          {intensity}
        </p>
      </div>
    </div>
  );
}

function HappyIcon() {
  return (
    <svg className="size-[36px]" fill="none" viewBox="0 0 39 36">
      <path d="M19.5 0C8.74758 0 0 8.07469 0 18C0 27.9253 8.74758 36 19.5 36C30.2524 36 39 27.9253 39 18C39 8.07469 30.2524 0 19.5 0ZM19.5 33.3659C10.3212 33.3659 2.85363 26.4727 2.85363 18C2.85363 9.52727 10.3212 2.63412 19.5 2.63412C28.6788 2.63412 36.1464 9.52727 36.1464 18C36.1464 26.4727 28.6788 33.3659 19.5 33.3659Z" fill="currentColor" className="text-foreground" />
      <path d="M27.5852 0.000492454L26.0168 0.144844C25.9698 0.149133 21.2304 0.577265 13.7927 0.577265C6.35494 0.577265 1.61553 0.149132 1.56884 0.144773L0 0V1.45533C0 8.47561 6.18736 14.187 13.7927 14.187C21.398 14.187 27.5853 8.47561 27.5853 1.45533L27.5852 0.000492454Z" fill="currentColor" className="text-foreground" transform="translate(5.707, 16.406)" />
      <path d="M2.85363 0H0V6.14637H2.85363V0Z" fill="currentColor" className="text-foreground" transform="translate(22.073, 9.427)" />
      <path d="M2.85363 0H0V6.14637H2.85363V0Z" fill="currentColor" className="text-foreground" transform="translate(14.073, 9.427)" />
    </svg>
  );
}

function PerformanceIcon() {
  return (
    <svg className="size-[36px]" fill="none" viewBox="0 0 36 36">
      <path clipRule="evenodd" d="M24.8761 0.0699604C22.7316 0.32777 20.6925 1.09336 18.7941 2.35906C15.38 4.63246 13.0324 8.08566 12.0949 12.2029C11.7824 13.5779 11.7824 17.1873 12.0949 18.5506C12.216 19.0857 12.2902 19.5506 12.2551 19.5897C12.048 19.8084 2.32147 19.0662 0.669071 18.7068C-0.053589 18.5467 -0.159049 18.7615 0.200321 19.7108C0.641731 20.8749 2.28622 22.3865 4.00892 23.2263C6.43472 24.4021 9.59482 25.0544 12.3214 24.9255C14.2784 24.8396 15.3058 24.4841 16.3644 23.535C17.6456 22.3748 18.3097 20.367 18.1144 18.2225C18.0324 17.4139 18.0558 17.2147 18.2043 17.3006C18.3097 17.3709 19.2277 17.9646 20.259 18.6248C25.5715 22.074 32.501 26.1521 39.571 29.9878C42.9226 31.8042 52.653 36.9761 53.809 37.5542L54.3363 37.812L53.9652 37.4448C53.7543 37.2417 46.9769 30.7534 38.8952 23.0268C30.821 15.3002 23.8832 8.65579 23.4852 8.26879L22.7626 7.56567L23.1688 6.77661C23.7235 5.65941 24.8836 4.48751 25.8094 4.08911C26.4266 3.82739 26.7821 3.7727 27.7 3.81958C29.7117 3.91333 31.7781 5.15158 34.2586 7.75708C35.0047 8.53442 35.618 9.07738 35.618 8.95628C35.618 8.4055 34.7899 5.99538 34.2352 4.91718C33.4266 3.35078 31.7821 1.68278 30.3836 0.99528C28.6961 0.17497 26.7511 -0.15656 24.8761 0.0699604Z" fill="currentColor" className="text-foreground" fillRule="evenodd" transform="scale(0.6) translate(6, 6)" />
    </svg>
  );
}

export function WhatToExpectSection({ whatToExpectData }: WhatToExpectSectionProps) {
  const { outcomes, disclaimer = DEFAULT_DISCLAIMER, signsOfEffectiveness } = whatToExpectData;
  
  // Helper to strip "/day" from usage text
  const formatUsage = (usage: string) => {
    return usage.replace(/\/day$/i, '').trim();
  };
  
  return (
    <div data-section className="bg-card relative rounded-[16px] border border-border w-full my-8">
      {/* Header */}
      <div className="pt-[33px] pb-6 px-4 md:px-8">
        <div className="flex flex-col gap-[8px] items-center max-w-[635px] mx-auto">
          <h2 className="text-primary text-center">
            What to Expect
          </h2>
          <p className="font-['Inter'] font-normal leading-[20px] text-muted-foreground text-[14px] tracking-[-0.15px] text-center">
            Typical usage and expected outcomes
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-b border-border py-6 px-4 md:px-8">
        <div className="flex gap-3 items-start w-full">
          <svg className="size-[20px] shrink-0 mt-[2px]" fill="none" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="8.33" stroke="currentColor" className="text-muted-foreground" strokeWidth="1.67" />
            <path d="M10 6.66667V10" stroke="currentColor" className="text-muted-foreground" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 13.3333H10.0083" stroke="currentColor" className="text-muted-foreground" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-['Inter'] font-normal leading-[18px] text-muted-foreground text-[13px] tracking-[-0.15px] flex-1">
            {disclaimer}
          </p>
        </div>
      </div>

      {/* Outcome Rows */}
      <div className="pb-8 px-4 md:px-0">
        {outcomes.map((outcome, index) => {
          const IconComponent = typeof outcome.icon === 'string' 
            ? (outcome.icon === 'happy' ? HappyIcon : PerformanceIcon)
            : outcome.icon;

          return (
            <div 
              key={index} 
              className={`
                ${index > 0 ? 'border-t border-border mt-8' : ''}
                pt-8 md:pt-0 md:mt-0
              `}
            >
              {/* Desktop Layout */}
              <div className="hidden md:flex gap-4 lg:gap-[16px] items-center justify-center py-8 px-6 lg:px-[32px]" data-what-to-expect-row>
                {/* Outcome Column */}
                <div className="flex flex-col items-center justify-center flex-1 min-w-0 gap-[20px]" data-what-to-expect-column>
                  <p className="font-['Inter'] font-bold leading-[16px] text-muted-foreground text-[12px] text-center tracking-[0.3px] uppercase" data-column-label>
                    Outcome
                  </p>
                  <div className="flex items-center justify-center w-full h-[36px]" data-column-icon>
                    {typeof outcome.icon === 'string' ? (
                      <IconComponent />
                    ) : (
                      <IconComponent className="size-[36px] text-primary" />
                    )}
                  </div>
                  <div className="flex items-center justify-center w-full h-[18px]" data-column-description>
                    <p 
                      className="font-['Inter'] font-normal leading-[14px] text-muted-foreground text-center px-2 whitespace-nowrap overflow-hidden"
                      style={{
                        fontSize: outcome.iconLabel.length > 28 ? '9px' : outcome.iconLabel.length > 25 ? '10px' : outcome.iconLabel.length > 20 ? '11px' : outcome.iconLabel.length > 18 ? '12px' : '13px'
                      }}
                    >
                      {outcome.iconLabel}
                    </p>
                  </div>
                </div>

                {/* Usage Column */}
                <div className="flex flex-col items-center justify-center flex-1 min-w-0 gap-[20px]" data-what-to-expect-column>
                  <p className="font-['Inter'] font-bold leading-[16px] text-muted-foreground text-[12px] text-center tracking-[0.3px] uppercase" data-column-label>
                    Usage
                  </p>
                  <div className="flex gap-[6px] items-center justify-center h-[36px]" data-column-icon>
                    <svg className="size-[36px] shrink-0" fill="none" viewBox="0 0 24 24">
                      <path d="M10.5 20.5L20.5 10.5C20.9673 10.0421 21.3391 9.49605 21.5941 8.89352C21.849 8.29098 21.982 7.64389 21.9853 6.98965C21.9886 6.3354 21.8622 5.687 21.6133 5.08192C21.3645 4.47684 20.9982 3.92709 20.5355 3.46447C20.0729 3.00184 19.5232 2.63552 18.9181 2.38667C18.313 2.13783 17.6646 2.0114 17.0104 2.01471C16.3561 2.01801 15.709 2.15098 15.1065 2.40592C14.5039 2.66087 13.9579 3.03273 13.5 3.5L3.5 13.5C3.03273 13.9579 2.66087 14.5039 2.40592 15.1065C2.15098 15.709 2.01801 16.3561 2.01471 17.0104C2.0114 17.6646 2.13783 18.313 2.38667 18.9181C2.63552 19.5232 3.00184 20.0729 3.46447 20.5355C3.92709 20.9982 4.47684 21.3645 5.08192 21.6133C5.687 21.8622 6.3354 21.9886 6.98965 21.9853C7.64389 21.982 8.29098 21.849 8.89352 21.5941C9.49605 21.3391 10.0421 20.9673 10.5 20.5Z" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8.5 8.5L15.5 15.5" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-['Inter'] font-normal leading-[20px] text-primary text-[16px] whitespace-nowrap">{formatUsage(outcome.usage)}</span>
                    {outcome.usageFrequency && (
                      <span className="font-['Inter'] font-normal leading-[20px] text-primary text-[16px] whitespace-nowrap"> {outcome.usageFrequency}</span>
                    )}
                    {outcome.usageDelivery && (
                      <span className="font-['Inter'] font-normal leading-[20px] text-primary text-[16px] whitespace-nowrap"> {outcome.usageDelivery}</span>
                    )}
                  </div>
                  <div className="flex items-center justify-center w-full h-[18px]" data-column-description>
                    <p className="font-['Inter'] font-normal leading-[18px] text-muted-foreground text-[13px] text-center">
                      per day
                    </p>
                  </div>
                </div>

                {/* Best Time Column - ALWAYS show for consistent layout */}
                <div className="flex flex-col items-center justify-center flex-1 min-w-0 gap-[20px]" data-what-to-expect-column>
                  <p className="font-['Inter'] font-bold leading-[16px] text-muted-foreground text-[12px] text-center tracking-[0.3px] uppercase" data-column-label>
                    Best Time
                  </p>
                  <div className="flex items-center justify-center w-full h-[36px]" data-column-icon>
                    {outcome.bestTime ? (
                      <div className="flex gap-[8px] items-center justify-center">
                        {/* Check for "Morning or Evening" / "Morning and Evening" - show both icons */}
                        {(outcome.bestTime.includes('Morning') && outcome.bestTime.includes('Evening')) ? (
                          <>
                            <svg className="size-[36px]" fill="none" viewBox="0 0 28 28">
                              <circle cx="14" cy="14" r="5.83" stroke="currentColor" className="text-primary" strokeWidth="2.33" />
                              <path d="M14 3.5V7" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                              <path d="M14 21V24.5" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                              <path d="M5.76 5.76L8.17 8.17" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                              <path d="M19.83 19.83L22.24 22.24" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                              <path d="M3.5 14H7" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                              <path d="M21 14H24.5" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                              <path d="M5.76 22.24L8.17 19.83" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                              <path d="M19.83 8.17L22.24 5.76" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            </svg>
                            <span className="font-['Inter'] font-normal text-muted-foreground text-[14px]">/</span>
                            <svg className="size-[36px]" fill="none" viewBox="0 0 28 28">
                              {/* Sunset icon - sun at horizon with rays */}
                              <circle cx="14" cy="18" r="4" stroke="currentColor" className="text-primary" strokeWidth="2" />
                              <path d="M14 10v2" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" />
                              <path d="M7.5 15l1.5 1.5" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" />
                              <path d="M19 16.5l1.5-1.5" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" />
                              <path d="M3 22h22" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            </svg>
                          </>
                        ) : outcome.bestTime.includes('Morning') ? (
                          <svg className="size-[36px]" fill="none" viewBox="0 0 28 28">
                            <circle cx="14" cy="14" r="5.83" stroke="currentColor" className="text-primary" strokeWidth="2.33" />
                            <path d="M14 3.5V7" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M14 21V24.5" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M5.76 5.76L8.17 8.17" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M19.83 19.83L22.24 22.24" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M3.5 14H7" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M21 14H24.5" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M5.76 22.24L8.17 19.83" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M19.83 8.17L22.24 5.76" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                          </svg>
                        ) : outcome.bestTime.includes('Evening') ? (
                          <svg className="size-[36px]" fill="none" viewBox="0 0 28 28">
                            {/* Sunset icon - sun at horizon with rays */}
                            <circle cx="14" cy="18" r="4" stroke="currentColor" className="text-primary" strokeWidth="2" />
                            <path d="M14 10v2" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" />
                            <path d="M7.5 15l1.5 1.5" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" />
                            <path d="M19 16.5l1.5-1.5" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" />
                            <path d="M3 22h22" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                          </svg>
                        ) : outcome.bestTime === 'Anytime' ? (
                          <svg className="size-[36px]" fill="none" viewBox="0 0 28 28">
                            <circle cx="14" cy="14" r="10" stroke="currentColor" className="text-primary" strokeWidth="2.33" />
                            <path d="M14 7v7l4 4" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                          </svg>
                        ) : (outcome.bestTime.includes('with food') || outcome.bestTime.includes('meal')) ? (
                          <UtensilsCrossed className="size-[36px] text-primary" />
                        ) : outcome.bestTime.includes('before bed') ? (
                          <svg className="size-[36px]" fill="none" viewBox="0 0 28 28">
                            {/* Bed icon */}
                            <rect x="2" y="16" width="24" height="8" rx="1" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M2 16V8a2 2 0 0 1 2-2h6" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="8" cy="10" r="2" stroke="currentColor" className="text-primary" strokeWidth="2" />
                          </svg>
                        ) : (
                          <svg className="size-[36px]" fill="none" viewBox="0 0 28 28">
                            <circle cx="14" cy="14" r="10" stroke="currentColor" className="text-primary" strokeWidth="2.33" />
                            <path d="M14 7v7l4 4" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                          </svg>
                        )}
                      </div>
                    ) : (
                      <p className="text-xs text-muted-foreground">—</p>
                    )}
                  </div>
                  <div className="flex items-center justify-center w-full h-[18px]" data-column-description>
                    <p className="font-['Inter'] font-normal leading-[18px] text-muted-foreground text-[13px] text-center whitespace-nowrap">
                      {outcome.bestTime && outcome.bestTime.includes('or') ? 'Morning or Evening'
                        : outcome.bestTime === 'Anytime' ? 'Anytime'
                        : (outcome.bestTime.includes('with food') || outcome.bestTime.includes('meal')) ? 'with food'
                        : outcome.bestTime.includes('before bed') ? 'Before bed'
                        : outcome.bestTime.includes('Morning') && !outcome.bestTime.includes('Evening') ? 'Morning'
                        : outcome.bestTime.includes('Evening') && !outcome.bestTime.includes('Morning') ? 'Evening'
                        : outcome.bestTime || '\u00A0'}
                    </p>
                  </div>
                </div>

                {/* Results Column */}
                <div className="flex flex-col items-center justify-center flex-1 min-w-0 gap-[20px]" data-what-to-expect-column>
                  <p className="font-['Inter'] font-bold leading-[16px] text-muted-foreground text-[12px] text-center tracking-[0.3px] uppercase" data-column-label>
                    Results
                  </p>
                  <div className="flex gap-[6px] items-center justify-center w-full h-[36px]" data-column-icon>
                    <svg className="size-[36px] shrink-0" fill="none" viewBox="0 0 24 24">
                      <path d="M16 7H22V13" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-['Inter'] font-normal leading-[24px] text-primary text-[16px] whitespace-nowrap">{outcome.resultsWeeks}</span>
                    <span className="font-['Inter'] font-normal leading-[24px] text-primary text-[16px]">weeks</span>
                  </div>
                  <div className="w-full flex items-center justify-center h-[18px]" data-column-description>
                    <IntensityBar intensity={outcome.intensity} />
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="flex md:hidden flex-col gap-8">
                {/* Outcome */}
                <div className="flex flex-col items-center gap-[12px]">
                  <p className="font-['Inter'] font-bold leading-[16px] text-muted-foreground text-[12px] text-center tracking-[0.3px] uppercase">
                    Outcome
                  </p>
                  <div className="flex h-[36px] items-center justify-center">
                    {typeof outcome.icon === 'string' ? (
                      <IconComponent />
                    ) : (
                      <IconComponent className="size-[36px] text-primary" />
                    )}
                  </div>
                  <p className="font-['Inter'] font-normal leading-[18px] text-muted-foreground text-[13px] text-center">
                    {outcome.iconLabel}
                  </p>
                </div>

                {/* Usage */}
                <div className="flex flex-col items-center gap-[12px]">
                  <p className="font-['Inter'] font-bold leading-[16px] text-muted-foreground text-[12px] text-center tracking-[0.3px] uppercase">
                    Usage
                  </p>
                  <div className="flex gap-[8px] h-[36px] items-center justify-center">
                    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                      <path d="M10.5 20.5L20.5 10.5C20.9673 10.0421 21.3391 9.49605 21.5941 8.89352C21.849 8.29098 21.982 7.64389 21.9853 6.98965C21.9886 6.3354 21.8622 5.687 21.6133 5.08192C21.3645 4.47684 20.9982 3.92709 20.5355 3.46447C20.0729 3.00184 19.5232 2.63552 18.9181 2.38667C18.313 2.13783 17.6646 2.0114 17.0104 2.01471C16.3561 2.01801 15.709 2.15098 15.1065 2.40592C14.5039 2.66087 13.9579 3.03273 13.5 3.5L3.5 13.5C3.03273 13.9579 2.66087 14.5039 2.40592 15.1065C2.15098 15.709 2.01801 16.3561 2.01471 17.0104C2.0114 17.6646 2.13783 18.313 2.38667 18.9181C2.63552 19.5232 3.00184 20.0729 3.46447 20.5355C3.92709 20.9982 4.47684 21.3645 5.08192 21.6133C5.687 21.8622 6.3354 21.9886 6.98965 21.9853C7.64389 21.982 8.29098 21.849 8.89352 21.5941C9.49605 21.3391 10.0421 20.9673 10.5 20.5Z" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M8.5 8.5L15.5 15.5" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-['Inter'] font-normal leading-[24px] text-foreground text-[16px]">×</span>
                    <span className="font-['Inter'] font-normal leading-[30px] text-primary text-[20px]">{formatUsage(outcome.usage)}</span>
                    {outcome.usageFrequency && (
                      <span className="font-['Inter'] font-normal leading-[20px] text-primary text-[16px] whitespace-nowrap"> {outcome.usageFrequency}</span>
                    )}
                    {outcome.usageDelivery && (
                      <span className="font-['Inter'] font-normal leading-[20px] text-primary text-[16px] whitespace-nowrap"> {outcome.usageDelivery}</span>
                    )}
                  </div>
                  <p className="font-['Inter'] font-normal leading-[18px] text-muted-foreground text-[13px] text-center">
                    per day
                  </p>
                </div>

                {/* Best Time - ALWAYS show for consistent layout */}
                <div className="flex flex-col items-center gap-[12px]">
                  <p className="font-['Inter'] font-bold leading-[16px] text-muted-foreground text-[12px] text-center tracking-[0.3px] uppercase">
                    Best Time
                  </p>
                  {outcome.bestTime ? (
                  <>
                  <div className="flex h-[36px] items-center justify-center">
                    {/* Icons in a horizontal row */}
                    <div className="flex gap-[12px] items-center justify-center">
                      {outcome.bestTime.includes('Morning') && !outcome.bestTime.includes('Evening') && (
                        <svg className="size-[28px]" fill="none" viewBox="0 0 28 28">
                          <circle cx="14" cy="14" r="5.83" stroke="currentColor" className="text-primary" strokeWidth="2.33" />
                          <path d="M14 3.5V7" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                          <path d="M14 21V24.5" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                          <path d="M5.76 5.76L8.17 8.17" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                          <path d="M19.83 19.83L22.24 22.24" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                          <path d="M3.5 14H7" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                          <path d="M21 14H24.5" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                          <path d="M5.76 22.24L8.17 19.83" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                          <path d="M19.83 8.17L22.24 5.76" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                        </svg>
                      )}
                      
                      {outcome.bestTime.includes('Morning') && outcome.bestTime.includes('Evening') && (
                        <>
                          <svg className="size-[28px]" fill="none" viewBox="0 0 28 28">
                            <circle cx="14" cy="14" r="5.83" stroke="currentColor" className="text-primary" strokeWidth="2.33" />
                            <path d="M14 3.5V7" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M14 21V24.5" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M5.76 5.76L8.17 8.17" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M19.83 19.83L22.24 22.24" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M3.5 14H7" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M21 14H24.5" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M5.76 22.24L8.17 19.83" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M19.83 8.17L22.24 5.76" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                          </svg>
                          <span className="font-['Inter'] font-normal text-muted-foreground text-[16px]">/</span>
                          <svg className="size-[28px]" fill="none" viewBox="0 0 28 28">
                            {/* Sunset icon - sun at horizon with rays */}
                            <circle cx="14" cy="18" r="4.5" stroke="currentColor" className="text-primary" strokeWidth="2.33" />
                            <path d="M14 9v2.5" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M7 14.5l1.8 1.8" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M19.2 16.3l1.8-1.8" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                            <path d="M2 23h24" stroke="currentColor" className="text-primary" strokeWidth="2.67" strokeLinecap="round" />
                          </svg>
                        </>
                      )}
                      
                      {outcome.bestTime.includes('Evening') && !outcome.bestTime.includes('Morning') && (
                        <svg className="size-[28px]" fill="none" viewBox="0 0 28 28">
                          {/* Sunset icon - sun at horizon with rays */}
                          <circle cx="14" cy="18" r="4" stroke="currentColor" className="text-primary" strokeWidth="2" />
                          <path d="M14 10v2" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" />
                          <path d="M7.5 15l1.5 1.5" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" />
                          <path d="M19 16.5l1.5-1.5" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" />
                          <path d="M3 22h22" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                        </svg>
                      )}
                      
                      {outcome.bestTime === 'Anytime' && (
                        <svg className="size-[28px]" fill="none" viewBox="0 0 28 28">
                          <circle cx="14" cy="14" r="10" stroke="currentColor" className="text-primary" strokeWidth="2.33" />
                          <path d="M14 7v7l4 4" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                        </svg>
                      )}
                      
                      {(outcome.bestTime.includes('with food') || outcome.bestTime.includes('meal')) && (
                        <UtensilsCrossed className="size-[28px] text-primary" />
                      )}
                      
                      {outcome.bestTime.includes('before bed') && (
                        <svg className="size-[28px]" fill="none" viewBox="0 0 28 28">
                          {/* Bed icon */}
                          <rect x="2" y="16" width="24" height="8" rx="1" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M2 16V8a2 2 0 0 1 2-2h6" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="8" cy="10" r="2" stroke="currentColor" className="text-primary" strokeWidth="2" />
                        </svg>
                      )}
                      
                      {/* Fallback: Show clock icon for any other text */}
                      {!outcome.bestTime.includes('Morning') && 
                       !outcome.bestTime.includes('Evening') && 
                       outcome.bestTime !== 'Anytime' &&
                       !outcome.bestTime.includes('with food') &&
                       !outcome.bestTime.includes('meal') &&
                       !outcome.bestTime.includes('before bed') && (
                        <svg className="size-[28px]" fill="none" viewBox="0 0 28 28">
                          <circle cx="14" cy="14" r="10" stroke="currentColor" className="text-primary" strokeWidth="2.33" />
                          <path d="M14 7v7l4 4" stroke="currentColor" className="text-primary" strokeWidth="2.33" strokeLinecap="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  {/* Single line text below icons - same as desktop */}
                  <div className="flex items-center justify-center" style={{ minHeight: '18px' }}>
                    {outcome.bestTime.includes('or') ? (
                      <p className="font-['Inter'] font-normal leading-[18px] text-muted-foreground text-[13px] whitespace-nowrap">Morning or Evening</p>
                    ) : outcome.bestTime === 'Anytime' ? (
                      <p className="font-['Inter'] font-normal leading-[18px] text-muted-foreground text-[13px]">Anytime</p>
                    ) : (outcome.bestTime.includes('with food') || outcome.bestTime.includes('meal')) ? (
                      <p className="font-['Inter'] font-normal leading-[18px] text-muted-foreground text-[13px]">with food</p>
                    ) : outcome.bestTime.includes('before bed') ? (
                      <p className="font-['Inter'] font-normal leading-[18px] text-muted-foreground text-[13px]">Before bed</p>
                    ) : outcome.bestTime.includes('Morning') && !outcome.bestTime.includes('Evening') ? (
                      <p className="font-['Inter'] font-normal leading-[18px] text-muted-foreground text-[13px]">Morning</p>
                    ) : outcome.bestTime.includes('Evening') && !outcome.bestTime.includes('Morning') ? (
                      <p className="font-['Inter'] font-normal leading-[18px] text-muted-foreground text-[13px]">Evening</p>
                    ) : (
                      <p className="font-['Inter'] font-normal leading-[18px] text-muted-foreground text-[13px]">{outcome.bestTime}</p>
                    )}
                  </div>
                  </>
                  ) : (
                  <>
                    <div className="flex h-[36px] items-center justify-center">
                      <p className="text-xs text-muted-foreground">—</p>
                    </div>
                    <div style={{ minHeight: '18px' }}>
                      <p className="font-['Inter'] font-normal leading-[18px] text-muted-foreground text-[13px]">\u00A0</p>
                    </div>
                  </>
                  )}
                </div>

                {/* Results */}
                <div className="flex flex-col items-center gap-[12px]">
                  <p className="font-['Inter'] font-bold leading-[16px] text-muted-foreground text-[12px] text-center tracking-[0.3px] uppercase">
                    Results
                  </p>
                  <div className="flex gap-[8px] items-center justify-center h-[36px]">
                    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                      <path d="M16 7H22V13" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 7L13.5 15.5L8.5 10.5L2 17" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-['Inter'] font-normal leading-[30px] text-primary text-[20px]">{outcome.resultsWeeks}</span>
                    <span className="font-['Inter'] font-normal leading-[24px] text-primary text-[16px]">weeks</span>
                  </div>
                  <IntensityBar intensity={outcome.intensity} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}