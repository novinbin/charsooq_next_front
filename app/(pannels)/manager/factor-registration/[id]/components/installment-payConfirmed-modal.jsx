import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Modal } from "@/components/ui/modal";
import { useState } from "react"; // Make sure to import useState

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  const [delayDays, setDelayDays] = useState(0); // State for delay days

  return (
    <Modal title="تأیید" isOpen={isOpen} onClose={onClose}>
      <div className="p-4">
        <p>آیا مطمئن هستید که می‌خواهید وضعیت را به تسویه شده تغییر دهید؟</p>

        <div className="mt-4">
          <label htmlFor="delayDays" className="mb-1 block">
            روز های دیرکرد
          </label>
          <Input
            type="number"
            id="delayDays"
            value={delayDays}
            onChange={(e) => setDelayDays(e.target.value)}
            min="0" // Ensure it's non-negative
          />
        </div>

        <div className="mt-4 flex justify-end gap-4">
          <Button variant="outline" onClick={onClose}>
            لغو
          </Button>
          <Button
            className="ml-2"
            onClick={() => {
              onConfirm(delayDays); // Pass delayDays to onConfirm
              onClose();
            }}
          >
            تأیید
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
