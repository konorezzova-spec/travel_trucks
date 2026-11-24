import Loader from '@/components/Loader/Loader';
import Modal from '@/components/Modal/Modal';

export default function Loading() {
  return (
    <Modal>
      <Loader h2="Loading..." p="Pleas wait." />
    </Modal>
  );
}
