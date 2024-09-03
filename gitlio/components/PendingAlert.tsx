import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PendingAlert() {
  return (
    <div
      role="alert"
      className="alert shadow-lg bg-blue-50 border border-blue-200 flex justify-center items-center h-[200px] rounded-lg"
    >
      <FontAwesomeIcon
        icon={faExclamationTriangle}
        className="w-[80px] h-[80px] text-blue-600 mr-4"
      />
      <span className="font-semibold text-lg text-blue-800">진행 예정</span>
    </div>
  );
}
