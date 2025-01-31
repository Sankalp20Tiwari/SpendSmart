"use client"

import React, { useEffect, useMemo, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Checkbox } from '@/components/ui/checkbox'
import { format } from 'date-fns'
import { categoryColors } from '@/data/categories'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Badge } from '@/components/ui/badge'
import { ChevronDown, ChevronUp, Clock, Cross, MoreHorizontalIcon, RefreshCcw, RefreshCw, Search, Trash, X } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import useFetch from '@/hooks/useFetch'
import { bulkDeleteTransactions } from '@/actions/accounts'
import { toast } from 'sonner'
import { BarLoader } from 'react-spinners'
  


const RECURRING_INTERVALS={
    DAILY: "Daily",
    WEEKLY: "Weekly",
    MONTHLY: "Monthly",
    YEARLY: "Yearly",
}
const TransactionTable = ({transactions}) => {
    
    const router = useRouter()

    const [selectedIds, setSelectedIds] = useState([])

    const [sortConfig, setSortConfig] = useState({
        field: "date",
        direction:"desc"
    })

    const [searchTerm, setSearchTerm] = useState("")
    const [typeFilter, setTypeFilter] = useState("")
    const [recurringFilter, setRecurringFilter] = useState("")

    const{
        loading:deleteLoading,
        fn:deleteFn,
        data:deleted
    } = useFetch(bulkDeleteTransactions)

    const filteredAndSortedTransactions = useMemo(()=>{
            let result = [...transactions]
            
            //apply search filter
            if(searchTerm){
                const searchLower = searchTerm.toLowerCase()
                result= result.filter(t=>t.description?.toLowerCase().includes(searchLower))
            }

            //apply recurring filter
            if(recurringFilter){
                result= result.filter(t=>{
                    if(recurringFilter === "recurring") return t.isRecurring
                    return !t.isRecurring
                })
            }

            //apply type filter
            if(typeFilter){
                result= result.filter(t=>t.type === typeFilter)
            }

            //apply sorting
            result.sort((a,b)=>{
                let comparison = 0

                switch (sortConfig.field) {
                    case 'date':
                            comparison = new Date(a.date) - new Date(b.date)
                        break;
                    
                    case 'amount':
                        comparison = a.amount - b.amount
                        break;
                    
                    case 'category':
                        comparison = a.category.localeCompare(b.category)
                        break;
                    default:
                        comparison = 0
                }
                return sortConfig.direction === "asc" ? comparison : -comparison
            })

            return result
    },[transactions,sortConfig,searchTerm,typeFilter,recurringFilter])
  
    const handleSort = (field)=>{
        setSortConfig(current => ({
            field,
            direction:
              current.field == field && current.direction === "asc" ? "desc" : "asc"
        }))
    }

    const handleSelect = (id) => {
        setSelectedIds(current => current.includes(id)?current.filter(i=>i!==id):[...current,id])
    }


    const handleSelectAll = (id) => {
        setSelectedIds(current => 
            current.length === filteredAndSortedTransactions.length 
            ? []
            : filteredAndSortedTransactions.map(t=>t.id)
        )
    }

    const handleBulkDelete = async () => {
        if(!window.confirm("Are you sure you want to delete these transactions?")){ 
            return
        }
        deleteFn(selectedIds)
        setSelectedIds([])
    }

    useEffect(()=>{
        if(deleted && !deleteLoading){
            toast.error("Transactions deleted successfully")
        }
    },[deleted,deleteLoading])
    const handleClearFilters =() => {
        setSearchTerm("")
        setTypeFilter("")
        setRecurringFilter("")
        setSelectedIds([])
    }

  return (
    <div className='space-y-4'>
        {deleteLoading && (
            <BarLoader className='mt-4' width={"100%"} color='#9333ea'/>
        )}
        {/* filters  */}
        <div className='flex flex-col sm:flex-row gap-4'>
            <div className='relative flex-1'>
                <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input 
                  placeholder='Search transactions'
                  value={searchTerm}
                  onChange={(e)=>setSearchTerm(e.target.value)}
                  className='pl-8'/>
            </div>
            <div className='flex gap-2 '>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className='w-[110px]'>
                    <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="INCOME">Income</SelectItem>
                    <SelectItem value="EXPENSE">Expense</SelectItem>
                </SelectContent>
                </Select>

                <Select value={recurringFilter} onValueChange={(value)=>setRecurringFilter(value)}>
                <SelectTrigger className='w-[140px]'>
                    <SelectValue placeholder="All Transactions" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="recurring">Recurring Only</SelectItem>
                    <SelectItem value="non-recurring">Non-Recurring Only</SelectItem>
                </SelectContent>
                </Select>
                
                </div>
            </div>
            <div className='flex gap-4'>
                {selectedIds.length >0 && <div className='flex items-center gap-2' >
                    <Button variant='destructive' size='sm' onClick={handleBulkDelete} >
                        <Trash className='w-4 h-4'/>
                        Delete Selected ({selectedIds.length})
                    </Button>    
                </div>}
                {(searchTerm || typeFilter || recurringFilter) && (
                    <div>
                        <Button variant='outline' size='sm' className='bg-inherit text-white' onClick={handleClearFilters} title='Clear Filters'>
                            < X className='w-4 h-4'/>
                        </Button>
                    </div>
                )}
        </div>

        {/* transactions  */}
        <div className='rounded-md border'>
        <Table>
        <TableHeader>
            <TableRow className=''>
            <TableHead className="w-[50px] ">
                <Checkbox 
                   onCheckedChange={handleSelectAll} 
                   checked={selectedIds.length === filteredAndSortedTransactions.length && filteredAndSortedTransactions.length >0}
                   />
            </TableHead>
            <TableHead 
               className='cursor-pointer text-white '
               onClick={()=>handleSort("date")}
            >
                <div className='flex items-center'>Date {sortConfig.field === "date" && (
                    sortConfig.direction === 'asc' ? <ChevronUp className=' ml-1 w-4 h-4' /> : <ChevronDown className=' ml-1 w-4 h-4' />
                )}</div>
            </TableHead>
            <TableHead className='text-white'>Description</TableHead>
            <TableHead 
               className='cursor-pointer text-white'
               onClick={()=>handleSort("category")}
            >
                <div className='flex items-center'>Category {sortConfig.field === "category" && (
                    sortConfig.direction === 'asc' ? <ChevronUp className=' ml-1 w-4 h-4' /> : <ChevronDown className=' ml-1 w-4 h-4' />
                )}</div>
            </TableHead>
            <TableHead 
               className='cursor-pointer text-white'
               onClick={()=>handleSort("amount")}
            >
                <div className='flex items-center justify-end'>Amount{sortConfig.field === "amount" && (
                    sortConfig.direction === 'asc' ? <ChevronUp className=' ml-1 w-4 h-4' /> : <ChevronDown className=' ml-1 w-4 h-4' />
                )}
                </div>
            </TableHead>
            <TableHead className='text-white'>Recurring</TableHead>
            <TableHead className='w-[50px]' />
            </TableRow>
        </TableHeader>
        <TableBody>
            {filteredAndSortedTransactions.length ===0 ? (
                <TableRow>
                    <TableCell colSpan={7} className="h-24 text-center">
                    No transactions found
                    </TableCell>
                </TableRow>):
            ( filteredAndSortedTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                <TableCell className="font-medium">
                    <Checkbox onCheckedChange={() => handleSelect(transaction.id)} checked ={selectedIds.includes(transaction.id)}/>
                </TableCell>
                <TableCell>
                   {format(new Date(transaction.date),'PP' )}
                </TableCell>
                <TableCell>{transaction.description}</TableCell>
                <TableCell className='capitalize'>
                    <span style={{
                        background: categoryColors[transaction.category]
                    }}
                    className='px-2 py-1 rounded text-sm text-white'
                    >
                    {transaction.category}
                    </span>     
                </TableCell>
                <TableCell className="text-right font-medium" style={{
                    color: transaction.type === "EXPENSE" ? "red" : "green"
                }}> 
                    {transaction.type === "EXPENSE" ? "-" : "+"}
                    $ {Number(transaction.amount).toFixed(2)
                }</TableCell>
                <TableCell>
                    {transaction.isRecurring ? (
                            <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                              <Badge  className='gap-1 bg-purple-200 text-purple-900 hover:bg-purple-200'>
                                <RefreshCw className='w-4 h-4'/>
                                {RECURRING_INTERVALS[transaction.recurringInterval]}
                              </Badge>
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className='text-sm'>
                                    <div>Next Date:</div>
                                    <div>
                                        {format(new Date(transaction.nextRecurringDate),'PP' )}
                                    </div>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          
                    ): <Badge  className='gap-1'>
                        <Clock  className='w-4 h-4'/>
                        One-time
                        </Badge>}
                </TableCell>
                <TableCell>
                        <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className='bg-inherit h-8 w-8 p-0'><MoreHorizontalIcon className='h-4 w-4 ' /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem 
                             onClick={()=>(
                                router.push(`/transaction/create?edit=${transaction.id}`)
                             )}
                            >
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className='text-destructive'
                              onClick={()=>deleteFn([transaction.id])}
                             >
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                        </DropdownMenu>
                </TableCell>
                </TableRow>
            ))
            )}
        </TableBody>
        </Table>
        </div>
    </div>
  )
}

export default TransactionTable
