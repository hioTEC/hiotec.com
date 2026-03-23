export type ToolStatus = 'live' | 'coming-soon';

export interface Tool {
  id: string;
  name: string;
  tagline: string;
  href: string;
  status: ToolStatus;
  icon: string; // inline SVG string
}

const mathIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 20 L12 4 L21 20 Z"/>
  <line x1="6" y1="14" x2="18" y2="14"/>
  <line x1="12" y1="4" x2="12" y2="20"/>
</svg>`;

const timerIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="13" r="8"/>
  <path d="M12 9 L12 13 L15 15"/>
  <path d="M9 2 L15 2"/>
  <path d="M12 2 L12 5"/>
</svg>`;

const questionBankIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
  <rect x="4" y="2" width="16" height="20" rx="2"/>
  <path d="M8 10 L16 10"/>
  <path d="M8 14 L13 14"/>
  <path d="M15 17 L17 19 L21 15"/>
</svg>`;

export const tools: Tool[] = [
  {
    id: 'math-qb',
    name: 'Math Question Bank',
    tagline: 'DSE 數學歷屆試題 + AI 輔助出題',
    href: 'https://math.hio.zone',
    status: 'live',
    icon: mathIcon,
  },
  {
    id: 'dse-timer',
    name: 'DSE Timer',
    tagline: '模擬考場計時器',
    href: '/tools/dse-timer',
    status: 'live',
    icon: timerIcon,
  },
  {
    id: 'questionbank',
    name: 'QuestionBank',
    tagline: 'DSE 練習題庫',
    href: '/tools/questionbank',
    status: 'coming-soon',
    icon: questionBankIcon,
  },
];
