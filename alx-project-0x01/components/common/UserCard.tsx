import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
    id,
    name,
    username,
    email,
    address,
    phone,
    website,
    company
}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 m-4 max-w-sm border border-gray-200">
            {/* Header with Avatar */}
            <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                    <p className="text-sm text-gray-500">@{username}</p>
                </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 mb-4">
                <div className="flex items-center">
                    <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href={`mailto:${email}`} className="text-sm text-blue-600 hover:underline">{email}</a>
                </div>
                
                <div className="flex items-center">
                    <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm text-gray-600">{phone}</span>
                </div>
                
                <div className="flex items-center">
                    <svg className="w-4 h-4 text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4z" clipRule="evenodd" />
                    </svg>
                    <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">{website}</a>
                </div>
            </div>

            {/* Address */}
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-1">Address</h4>
                <p className="text-sm text-gray-600">
                    {address.suite}, {address.street}<br />
                    {address.city}, {address.zipcode}
                </p>
            </div>

            {/* Company */}
            <div className="border-t pt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Company</h4>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-3 rounded-lg">
                    <p className="font-semibold text-gray-800 text-sm">{company.name}</p>
                    <p className="text-xs text-gray-600 italic mt-1">"{company.catchPhrase}"</p>
                </div>
            </div>

            {/* User ID Badge */}
            <div className="mt-4 flex justify-end">
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    ID: {id}
                </span>
            </div>
        </div>
    );
}
export default UserCard;