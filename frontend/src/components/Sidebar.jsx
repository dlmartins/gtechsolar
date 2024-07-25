import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSignOut = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    // Redirect to login page
    router.push('/login');
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? 'Expandir' : 'Recolher'}
      </button>
      <img src="/imgs/gtech-logo-final-04.png" alt="Logo" />
      <h2 style={{ display: isCollapsed ? 'none' : 'block' }}>Menu</h2>
      <Link href="/Dashboard">
        <a style={{ opacity: isCollapsed ? 0 : 1 }}>Dashboard</a>
      </Link>
      <Link href="/Clients">
        <a style={{ opacity: isCollapsed ? 0 : 1 }}>Clientes</a>
      </Link>
      <Link href="/proposta">
        <a style={{ opacity: isCollapsed ? 0 : 1 }}>Propostas</a>
      </Link>
      {/* <Link href="/settings">
        <a style={{ opacity: isCollapsed ? 0 : 1 }}>Configurações</a>
      </Link> */}
      <div className="signout">
        <a href="#" onClick={handleSignOut}>
          Sair <FontAwesomeIcon icon={faSignOutAlt} />
        </a>
      </div>
    </div>
  );
}
