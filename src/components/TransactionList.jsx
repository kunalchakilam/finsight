import TransactionCard from "./TransactionCard";

function TransactionList({ transactions }) {
  return (
    <div>
      {transactions.map((transaction) => (
        <TransactionCard
            key={transaction.id}
            title={transaction.title}
            amount={transaction.amount}
            category={transaction.category}
            type={transaction.type}
        />
      ))}
    </div>
  );
}

export default TransactionList;