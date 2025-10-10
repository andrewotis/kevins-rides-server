export default function Switch({ label, enabled, onChange }) {
  return (
    <div className="mb-4 w-full p-2">
      <label className="flex items-center justify-between cursor-pointer">
        <span className="text-sm font-medium">{label}</span>
        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          onClick={() => onChange(!enabled)}
          className={`cursor-pointer relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            enabled ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              enabled ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </label>
    </div>
  );
}