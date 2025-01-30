
import CreateAccountDrawer from '@/components/create-account-drawer'
import { Card, CardContent } from '@/components/ui/card'
import { Plus } from 'lucide-react'
import AccountCard from './_components/account-card'
import { getUserAccounts } from '@/actions/dashboard'



async function DashboardPage() {
   
    const accounts = await getUserAccounts()
    //console.log(accounts)

    return (
        <div className='px-5'>
            {/* budget progress */}

            {/* dashboard overview  */}

            {/* accounts grid */}
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 bg-black text-white'>
                <CreateAccountDrawer >
                    <Card className='hover:shadow-md transition-shadow cursor-pointer border-dashed bg-black text-white'>
                        <CardContent className='flex flex-col items-center justify-center text-muted-foreground h-full pt-5' >
                            <Plus className='w-6 h-6 mb-2' />
                            <p className='text-sm font-medium'>Add new Account</p>
                        </CardContent>
                    </Card>
                </CreateAccountDrawer>

                {accounts.length > 0 && accounts?.map((account) => {
                    return <AccountCard key={account.id} account={account} />
                })}
            </div>
        </div>
    )
}

export default DashboardPage