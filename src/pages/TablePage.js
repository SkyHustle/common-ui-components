import Table from "../components/Table";

function TablePage() {
  const fruits = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-300", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
    { name: "Grape", color: "bg-purple-500", score: 2 },
  ];

  const config = [
    { label: "Name", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => (
        <div className={`h-6 w-6 rounded-full ${fruit.color}`} />
      ),
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      sort: (a, b) => a.score - b.score,
    },
  ];

  return <Table data={fruits} config={config} />;
}

export default TablePage;