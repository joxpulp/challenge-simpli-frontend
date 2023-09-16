import Button from '@/components/Shared/Button/Button';
import * as Dialog from '@radix-ui/react-dialog';
import { Exo } from 'next/font/google';
import styles from './LeadsModalWrapper.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { ReactNode } from 'react';

const exo = Exo({ subsets: ['latin'], weight: ['400'] });

interface LeadsModalWrapperProps {
  children: ReactNode;
}

function LeadsModalWrapper({ children }: LeadsModalWrapperProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className={styles.leadsModalWrapperButton}>
        <Button fullWidth extraClass={`${exo.className}`} buttonStyle="secondary">
          Request information
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.leadsModalWrapperOverlay}>
          <Dialog.Content className={`${styles.leadsModalWrapperContent} ${exo.className}`}>
            <Dialog.Title>Submit your contact information</Dialog.Title>
            <div>{children}</div>
            <Dialog.Close asChild>
              <AiOutlineClose size={15} className={styles.leadsModalWrapperIcon} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default LeadsModalWrapper;
