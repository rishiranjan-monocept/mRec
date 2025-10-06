export default function CustomButton({ title, disabled = false, onClick, className = '' }) {
  return (
    <div className="flex w-full justify-center">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-[184px] rounded-[20px] px-[24px] py-[12px] text-white transition ${
          disabled ? 'cursor-not-allowed bg-gray-400 opacity-60' : 'bg-[#97144D] hover:bg-[#7a103f]'
        } ${className}`}
      >
        {title}
      </button>
    </div>
  );
}
