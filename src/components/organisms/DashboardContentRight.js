import Card from '@/components/molecules/card'
import IncomeExpense from '@/components/molecules/IncomeExpense'
import LatestSpending from '@/components/molecules/LatestSpending'
import CtaMore from '@/components/molecules/CtaMore'
const DashboardHeader = () => {
  return (
    <div className="p-[30px]">
      <Card>
        <IncomeExpense/>
      </Card>
      <Card>
        <LatestSpending/>
      </Card>
      <Card>
        <CtaMore/>
      </Card>
    </div>
  );
};

export default DashboardHeader;