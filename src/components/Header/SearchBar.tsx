
import React, { useState } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onSearch(query);
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' || e.key === 'Return') {
            handleSearch();
        }
    };

    return (
        <InputGroup
            maxWidth={48}
        >
            <InputLeftElement pointerEvents='none'>
                <SearchIcon color='gray.300' />
            </InputLeftElement>
            <Input
                type="text"
                placeholder="Search pool"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={handleKeyUp} // Call handleKeyUp when a key is released
            />
        </InputGroup>
    );
};

export default SearchBar;
