import * as React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Button from 'src/components/Button';
import FormInput from 'src/components/FormInput';
import { useDebounce } from 'src/hooks';

type SearchFormProps = {
  onSearch?: (value: string) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, ...rest }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const debouncedSearchTerm = useDebounce(searchTerm);

  React.useEffect(() => {
    onSearch && onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div {...rest}>
      <FormInput
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search games..."
        addonElement={
          <Button disabled className="font-bold btn-addon-right">
            <AiOutlineSearch size={16} />
          </Button>
        }
      />
    </div>
  );
};

export default SearchForm;
