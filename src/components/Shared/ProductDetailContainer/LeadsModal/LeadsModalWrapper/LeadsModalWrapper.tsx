import Button from '@/components/Shared/Button/Button';
import * as Dialog from '@radix-ui/react-dialog';
import { Exo } from 'next/font/google';
import styles from './LeadsModalWrapper.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { ChildrenProp } from '@/utils/types/children.types';
import leadsModalWrapperTexts from './text';

const exo = Exo({ subsets: ['latin'], weight: ['400'] });

function LeadsModalWrapper({ children }: ChildrenProp) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild className={styles.leadsModalWrapperButton}>
        <Button extraClass={`${exo.className} ${styles.leadsModalWrapperButtonMobile}`} buttonStyle="secondary">
          {leadsModalWrapperTexts.MORE_INFO_CTA}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.leadsModalWrapperOverlay}>
          <Dialog.Content className={`${styles.leadsModalWrapperContent} ${exo.className}`}>
            <Dialog.Title>{leadsModalWrapperTexts.TITLE_MODAL}</Dialog.Title>
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
