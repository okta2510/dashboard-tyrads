import Card from '@/components/molecules/card'
import IncomeExpense from '@/components/organisms/IncomeExpense'
import LatestSpending from '@/components/organisms/LatestSpending'
import CtaMore from '@/components/organisms/CtaMore'
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