import Header from "../components/Dashboard/Header";
import WelcomeCard from "../components/Dashboard/WelcomeCard";
import BalanceCard from "../components/Dashboard/BalanceCard";
import AccountSection from "../components/Accounts/AccountSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import StatsGrid from "../components/Dashboard/StatsGrid";
import AnalyticsSection from "../components/Analytics/AnalyticsSection";

function DashboardPage({
  balance,
  accounts,
  categories,
  transactions,
  onAddTransaction,
  onUpdateTransaction,
  onDeleteTransaction,
  onAddCategory,
  onAddAccount,
  onUpdateAccount,
}) {
  return (
    <>
      <Header />

      <WelcomeCard name="Kunal" isLoggedIn={true} />

      <BalanceCard balance={balance} />

      <StatsGrid transactions={transactions} />

      <AnalyticsSection
    transactions={transactions}
/>

      <AccountSection
        accounts={accounts}
        onAddAccount={onAddAccount}
        onUpdateAccount={onUpdateAccount}
      />

      <TransactionSection
        transactions={transactions}
        categories={categories}
        accounts={accounts}
        onAddTransaction={onAddTransaction}
        onUpdateTransaction={onUpdateTransaction}
        onDeleteTransaction={onDeleteTransaction}
        onAddCategory={onAddCategory}
      />
    </>
  );
}

export default DashboardPage;
