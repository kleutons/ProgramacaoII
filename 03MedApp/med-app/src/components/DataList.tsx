interface Column {
  key: string;
  label: string;
  format?: (value: any) => string;
}

interface DataListProps {
  items: Record<string, any>[];
  columns: Column[];
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

export default function DataList({ items, columns, onEdit, onDelete }: DataListProps) {
  return (
    <div className="bg-[#1A1F24] text-white p-6 rounded-lg w-full">
      <div
        className={`grid grid-cols-${
          columns.length + 1
        } gap-4 px-2 py-2 border-b border-gray-700 text-gray-400 text-sm font-semibold`}
      >
        {columns.map((col) => (
          <div key={col.key}>{col.label}</div>
        ))}
        <div className="text-right">Ações</div>
      </div>

      {items.map((item) => (
        <div
          key={item._id}
          className={`grid grid-cols-${
            columns.length + 1
          } gap-4 px-2 py-4 border-b border-gray-800 hover:bg-[#2A2F34] transition`}
        >
          {columns.map((col) => (
            <div key={col.key}>{col.format ? col.format(item[col.key]) : item[col.key]}</div>
          ))}
          <div className="flex justify-end gap-2">
            <button
              onClick={() => onEdit?.(item._id)}
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete?.(item._id)}
              className="text-red-400 hover:text-red-300 text-sm"
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
