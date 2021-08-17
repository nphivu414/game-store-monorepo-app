import * as React from 'react';
import FormInput from 'src/components/FormInput';

type SearchFormProps = {
  value?: string;
};

const SearchForm: React.FC<SearchFormProps> = () => {
  return <FormInput />;
};

export default SearchForm;
