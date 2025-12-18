
import Navbar from './Navbar'
import React from 'react';
import { 
  ArrowDownRight, 
  ArrowUpRight, 
  Users, 
  Truck, 
  FileText, 
  ShoppingCart 
} from 'lucide-react';
function Invoice() {
  return (
    <>
    <Navbar />

      <div className="min-h-screen bg-gray-50 p-3">

        {/* Top Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-2">
          
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">$3071.44</p>
                <p className="text-sm text-gray-500 mt-1">Total Purchase Due</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <ShoppingCart className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
          

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">$4385</p>
                <p className="text-sm text-gray-500 mt-1">Total Sales Due</p>
              </div>
              <div className="bg-teal-100 p-3 rounded-full">
                <ArrowDownRight className="w-6 h-6 text-teal-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">$385656.5</p>
                <p className="text-sm text-gray-500 mt-1">Total Sale Amount</p>
              </div>
              <div className="bg-cyan-100 p-3 rounded-full">
                <ArrowUpRight className="w-6 h-6 text-cyan-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">$40000</p>
                <p className="text-sm text-gray-500 mt-1">Total Sale Amount</p>
              </div>
              <div className="bg-rose-100 p-3 rounded-full">
                <ArrowUpRight className="w-6 h-6 text-rose-600" />
              </div>
            </div>
          </div>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          <div className="bg-orange-500 text-white rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-4xl font-bold">100</p>
              <p className="text-orange-100">Customers</p>
            </div>
            <Users className="w-10 h-10 opacity-80" />
          </div>

          <div className="bg-cyan-500 text-white rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-4xl font-bold">100</p>
              <p className="text-cyan-100">Suppliers</p>
            </div>
            <Truck className="w-10 h-10 opacity-80" />
          </div>

          <div className="bg-slate-800 text-white rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-4xl font-bold">100</p>
              <p className="text-slate-300">Purchase Invoice</p>
            </div>
            <FileText className="w-10 h-10 opacity-80" />
          </div>

          <div className="bg-green-600 text-white rounded-xl p-6 flex items-center justify-between">
            <div>
              <p className="text-4xl font-bold">105</p>
              <p className="text-green-100">Sales Invoice</p>
            </div>
            <FileText className="w-10 h-10 opacity-80" />
          </div>

        </div>
        </div>
    </>
  )
}

export default Invoice