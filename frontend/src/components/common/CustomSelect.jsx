import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const CustomSelect = ({ options, placeholder, name, value, onChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(value || "");

  React.useEffect(() => {
    if (value !== undefined) {
      setSelected(value);
    }
  }, [value]);

  const handleSelect = (opt) => {
    setSelected(opt);
    setIsOpen(false);
    if (onChange) {
      onChange(opt);
    }
  };

  return (
    <div className="relative">
      <input type="hidden" name={name} value={selected} required />
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 bg-white border rounded-xl flex items-center justify-between transition-all font-medium text-sm ${isOpen ? 'border-brand-orange ring-2 ring-brand-orange/20' : 'border-gray-100'
          } ${selected ? 'text-brand-dark' : 'text-gray-500'}`}
      >
        <span>{selected || placeholder}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-orange' : 'text-gray-400'}`}
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-[60]" onClick={() => setIsOpen(false)} />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-xl shadow-xl z-[70] overflow-hidden"
          >
            {options.map((opt, i) => (
              <div
                key={i}
                onClick={() => handleSelect(opt)}
                className={`px-4 py-3 text-sm cursor-pointer transition-colors ${selected === opt
                  ? 'bg-brand-orange text-white'
                  : 'text-brand-dark hover:bg-brand-orange/5'
                  }`}
              >
                {opt}
              </div>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
};

export default CustomSelect;
