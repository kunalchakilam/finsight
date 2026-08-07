import { useFinance } from "../context/FinanceContext";

import WelcomeCard from "../components/Dashboard/WelcomeCard";
import BalanceCard from "../components/Dashboard/BalanceCard";
import StatsGrid from "../components/Dashboard/StatsGrid";
import AccountSection from "../components/Accounts/AccountSection";
import TransactionSection from "../components/Transactions/TransactionSection";

function DashboardPage() {
  const {
    totalBalance,
    accounts,
    categories,
    transactions,
    addTransaction,
    updateTransaction,
    deleteTransaction,
    addCategory,
    addAccount,
    updateAccount,
  } = useFinance();

  return (
    <div className="dashboard-grid">
      <section className="welcome-area">
        <WelcomeCard
          name="Kunal"
          isLoggedIn={true}
        />
      </section>

      <section className="balance-area">
        <BalanceCard balance={totalBalance} />
      </section>

      <section className="stats-area">
        <StatsGrid transactions={transactions} />
      </section>

      <section className="accounts-area">
        <AccountSection
          accounts={accounts}
          onAddAccount={addAccount}
          onUpdateAccount={updateAccount}
        />
      </section>

      <section className="transactions-area">
        <TransactionSection
          transactions={transactions}
          categories={categories}
          accounts={accounts}
          onAddTransaction={addTransaction}
          onUpdateTransaction={updateTransaction}
          onDeleteTransaction={deleteTransaction}
          onAddCategory={addCategory}
        />
      </section>
    </div>
  );
}

export default DashboardPage;