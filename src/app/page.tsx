import { redirect } from 'next/navigation';
export default function App() {
  const pathName = Math.random() < 0.5 ? '/series' : '/movies';
  redirect(pathName);
}
