"use client"

import { createTransaction } from '@/actions/transaction'
import { transactionSchema } from '@/app/lib/schema'
import useFetch from '@/hooks/useFetch'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from '@/components/ui/input'
import CreateAccountDrawer from '@/components/create-account-drawer'
import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import ReceiptScanner from './receipt-scanner'

const AddTransactionForm = ({accounts,categories}) => {

    const router = useRouter()

    const{
        register,
        handleSubmit,
        formState:{errors},
        reset,
        setValue,
        watch,
        getValues
    }=useForm({
        resolver: zodResolver(transactionSchema),
        defaultValues:{
            type: "EXPENSE",
            amount: "",
            description:"",
            accountId: accounts.find((ac)=>ac.isDefault)?.id,
            date: new Date(),
            isRecurring:false
        }
    })

    const {
        loading:transactionLoading,
        fn:transactionFn,
        data:transactionResult
    } = useFetch(createTransaction)

    const type = watch("type")
    const isRecurring = watch("isRecurring")
    const date = watch("date")

    const filteredCategories = categories.filter((category)=> category.type === type)

    const onSubmit= async (data)=>{
        const formData= {
            ...data,
            amount: parseFloat(data.amount)
        }
        transactionFn(formData)
    }

    useEffect(()=>{
        if(transactionResult?.success && !transactionLoading){
            toast.success("Transaction created successfully")
            reset()
            router.push(`/account/${transactionResult.data.accountId}`)
        }
    },[transactionResult,transactionLoading])

    const handleScanComplete = (scannedData) => {
        console.log(scannedData)
        if (scannedData) {
          setValue("amount", scannedData.amount.toString());
          setValue("date", new Date(scannedData.date));
          if (scannedData.description) {
            setValue("description", scannedData.description);
          }
          const categoryExists = filteredCategories.some(
            (category) => category.id === scannedData.category
        );

        if (categoryExists) {
            setValue("category", scannedData.category);
        } else {
            // If the category from receipt isn't valid, fallback to a default category (e.g., "other-expense")
            setValue("category", "other-expense");
        }
          toast.success("Receipt scanned successfully");
        }
        console.log(getValues('category')); 
      };
  return (
    <form className='text-white space-y-2' onSubmit={handleSubmit(onSubmit)}>
       {/* ai receipt scanner */}
       <ReceiptScanner onScanComplete={handleScanComplete}/>
        <div className='space-y-2'>
            <label className='text-sm font-medium'>Type</label>
            <Select 
              onValueChange={(value)=> setValue("type",value)}
              defaultValue={type}
            >
            <SelectTrigger >
                <SelectValue placeholder="Select Account" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="EXPENSE">Expense</SelectItem>
                <SelectItem value="INCOME">Income</SelectItem>
            </SelectContent>
            </Select>
            {errors.type && (
                <p className='text-red-500'>{errors.type.message}</p>
            )}
        </div>
        <div className='flex gap-2'>
            <div className='space-y-2 flex-1'>
                <label className='text-sm font-medium'>Amount</label>
                <Input 
                type='number'
                step='0.01'
                placeholder="Enter amount"
                {...register("amount")}
                
                />
                {errors.amount && (
                    <p className='text-red-500'>{errors.amount.message}</p>
                )}
            </div>        
        
        <div className='space-y-2'>
                <label className='text-sm font-medium'>Account</label>
                <Select 
                onValueChange={(value)=> setValue("accountId",value)}
                defaultValue={getValues('accountId')}
                >
                <SelectTrigger >
                    <SelectValue placeholder="Select Account" />
                </SelectTrigger>
                <SelectContent>
                        {accounts.map((account)=>{
                            return <SelectItem key={account.id} value={account.id}>{account.name}
                            (${parseFloat(account.balance).toFixed(2)})
                            </SelectItem>
                        })}
                        <CreateAccountDrawer>
                            <Button variant="ghost" className='w-full select-none items-center'>
                                Create Account
                            </Button>
                        </CreateAccountDrawer>
                </SelectContent>
                </Select>
                {errors.accountId && (
                    <p className='text-red-500'>{errors.accountId.message}</p>
                )}
            </div> 
        </div>
        <div className='space-y-2'>
                <label className='text-sm font-medium'>Category</label>
                <Select 
                onValueChange={(value)=> setValue("category",value)}
                defaultValue={getValues('category')}
                >
                <SelectTrigger >
                    <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                        {filteredCategories.map((category)=>{
                            return <SelectItem key={category.id} value={category.id}>{category.name}
                            </SelectItem>
                        })}
                </SelectContent>
                </Select>
                {errors.category && (
                    <p className='text-red-500'>{errors.category.message}</p>
                )}
            </div>
            <div className='space-y-2'>
                <label className='text-sm font-medium'>Date</label>
                <Popover>
                <PopoverTrigger asChild>
                    <Button variant="ghost" className='w-full pl-3 text-left font-normal'>
                        {date ? format(date,"PPP"): <span>Pick a date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <Calendar 
                    mode="single"
                    selected={date}
                    onSelect={(date)=>{
                        setValue("date",date)
                    }}
                    initialFocus
                    disabled={(date)=>
                        date > new Date() || date < new Date("1900-01-01")
                    }
                    />
                </PopoverContent>
                </Popover>
                {errors.date && (
                    <p className='text-red-500'>{errors.date.message}</p>
                )}
            </div> 
            <div className='space-y-2'>
                <label className='text-sm font-medium'>Description</label>
                <Input 
                type='text'
                placeholder="Enter description"
                {...register("description")}
                
                />
                {errors.description && (
                    <p className='text-red-500'>{errors.description.message}</p>
                )}
            </div>

            <div className='flex items-center justify-between rounded-lg border p-3'>
                <div className='space-y-0.5'> 
                <label htmlFor="isDefault" className='text-sm font-medium cursor-pointer'>Recurring Transaction</label>
                <p className='text-sm text-muted-foreground'> Set up a recurring schedule for this transaction</p>
                </div>
                <Switch 
                 checked={isRecurring}
                 onCheckedChange={(checked)=>setValue("isRecurring",checked)}
                />
            </div>                
            {isRecurring && (
                    <div className='space-y-2'>
                    <label className='text-sm font-medium'>Recurring Interval</label>
                    <Select 
                    onValueChange={(value)=> setValue("recurringInterval",value)}
                    defaultValue={getValues('recurringInterval')}
                    >
                    <SelectTrigger >
                        <SelectValue placeholder="Select Interval" />
                    </SelectTrigger>
                    <SelectContent>
                            <SelectItem value="DAILY">Daily</SelectItem>
                            <SelectItem value="WEEKLY">Weekly</SelectItem>
                            <SelectItem value="MONTHLY">Monthly</SelectItem>
                            <SelectItem value="YEARLY">Yearly</SelectItem>
                    </SelectContent>
                    </Select>
                    {errors.recurringInterval && (
                        <p className='text-red-500'>{errors.recurringInterval.message}</p>
                    )}
                </div>                
            )}

            <div className='flex items-center justify-between'>
                <Button variant='ghost' type='button'
                        className='w-full' onClick={()=> router.back()}
                >
                    Cancel
                </Button>
                <Button type='submit' className='w-full' disabled={transactionLoading}>
                    Create Transaction
                </Button>
            </div>
    </form>
  )
}

export default AddTransactionForm
