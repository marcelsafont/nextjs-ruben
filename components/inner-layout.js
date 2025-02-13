import Header from '@/components/header';
export default function InnerLayout({ children }) {
    return (
      <main>
            <Header />
            {children}
      </main>
        
    );
  }