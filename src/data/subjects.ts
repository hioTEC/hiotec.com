export type SubjectStatus = 'live' | 'soon' | 'dev' | 'planned';

export interface Subject {
  id: string;
  name: string;
  nameCn: string;
  description: string;
  status: SubjectStatus;
  eta?: string;
  href?: string;
}

export const subjects: Subject[] = [
  {
    id: 'math-core',
    name: 'Mathematics (Core)',
    nameCn: '數學（必修）',
    description: '1,900+ 題目，涵蓋 2012–2025 歷屆試題，59 個考點。',
    status: 'live',
    href: 'https://math.hiotec.com',
  },
  {
    id: 'math-m2',
    name: 'Mathematics (M2)',
    nameCn: '數學（延伸二）',
    description: '微積分、代數、三角學延伸部分。',
    status: 'soon',
    eta: '2 週內',
  },
  {
    id: 'chinese',
    name: 'Chinese Language',
    nameCn: '中國語文',
    description: '閱讀理解、寫作、文言文。',
    status: 'dev',
    eta: '開發中',
  },
  {
    id: 'english',
    name: 'English Language',
    nameCn: '英國語文',
    description: 'Reading, Writing, Listening & Integrated Skills.',
    status: 'dev',
    eta: '開發中',
  },
];
