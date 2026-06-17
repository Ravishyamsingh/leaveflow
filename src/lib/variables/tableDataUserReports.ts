/**
 * Sample user reports table data for dashboard demo
 */

export type UserReportRow = {
  checked?: string;
  email: string;
  provider: string;
  created: string;
  lastsigned: string;
  uuid: string;
  menu?: string;
};

const tableDataUserReports: UserReportRow[] = [
  {
    checked: '',
    email: 'alice@leaveflow.com',
    provider: 'Google',
    created: '06 Nov, 2024 11:33',
    lastsigned: '15 Jan, 2025 14:22',
    uuid: 'f3f42fc419-ce32-49fc-92df...',
  },
  {
    checked: '',
    email: 'bob@leaveflow.com',
    provider: 'Email',
    created: '05 Oct, 2024 09:15',
    lastsigned: '14 Jan, 2025 10:45',
    uuid: 'f3f42fc419-ce32-49fc-92df...',
  },
  {
    checked: '',
    email: 'carol@leaveflow.com',
    provider: 'Google',
    created: '15 Sep, 2024 16:20',
    lastsigned: '13 Jan, 2025 16:55',
    uuid: 'f3f42fc419-ce32-49fc-92df...',
  },
  {
    checked: '',
    email: 'david@leaveflow.com',
    provider: 'Email',
    created: '08 Aug, 2024 13:40',
    lastsigned: '12 Jan, 2025 09:30',
    uuid: 'f3f42fc419-ce32-49fc-92df...',
  },
  {
    checked: '',
    email: 'eve@leaveflow.com',
    provider: 'Google',
    created: '20 Jul, 2024 10:25',
    lastsigned: '15 Jan, 2025 11:00',
    uuid: 'f3f42fc419-ce32-49fc-92df...',
  },
];

export default tableDataUserReports;
