const Definition = ({ children, def }) => {

  return (
    <li className="marker:text-[#A445ED]">
      <p className="my-2 dark:text-white">{children}</p>
      {def.example && (
        <span className="text-[#757575] text-sm italic mr-4">ex.</span>
      )}

      {def.example && <q className="text-[#757575]">{def.example}</q>}
    </li>
  );
};

export default Definition;
