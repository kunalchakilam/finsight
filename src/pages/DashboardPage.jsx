import WelcomeCard from "../components/Dashboard/WelcomeCard";
import BalanceCard from "../components/Dashboard/BalanceCard";
import StatsGrid from "../components/Dashboard/StatsGrid";
import AccountSection from "../components/Accounts/AccountSection";
import TransactionSection from "../components/Transactions/TransactionSection";

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
    <div className="dashboard-grid">

      <section className="welcome-area">
        <WelcomeCard
          name="Kunal"
          isLoggedIn={true}
        />
      </section>

      <section className="balance-area">
        <BalanceCard balance={balance} />
      </section>

      <section className="stats-area">
        <StatsGrid transactions={transactions} />
      </section>

      <section className="accounts-area">
        <AccountSection
          accounts={accounts}
          onAddAccount={onAddAccount}
          onUpdateAccount={onUpdateAccount}
        />
      </section>

      <section className="transactions-area">
        <TransactionSection
          transactions={transactions}
          categories={categories}
          accounts={accounts}
          onAddTransaction={onAddTransaction}
          onUpdateTransaction={onUpdateTransaction}
          onDeleteTransaction={onDeleteTransaction}
          onAddCategory={onAddCategory}
        />
      </section>

    </div>
  );
}

export default DashboardPage;