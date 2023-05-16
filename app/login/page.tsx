import Modal from '@/components/modal';
import AuthModalClient from './auth.client';

export default function AuthModalPage() {
  return (
    <Modal visible={true} className="h-[740px] w-[618px] ">
      <AuthModalClient />
      <footer className="mt-auto mmx:hidden">
        <section className="shelf">
          <div className="shelf w-full sm:w-[616px]">
            {[...Array(66)].map((_, i) => (
              <div className={`book ${i > 49 ? 'sm:hidden' : ''}`} key={i}></div>
            ))}
          </div>
        </section>
      </footer>
    </Modal>
  );
}
