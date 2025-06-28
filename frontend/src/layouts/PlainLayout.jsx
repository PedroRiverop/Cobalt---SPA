import react from '@vitejs/plugin-react'
import { Outlet } from 'react-router-dom';

export default function PlainLayout() {
  return <Outlet />;
}