class ReactorGenerator < Rails::Generators::NamedBase
  source_root File.expand_path('templates', __dir__)

  def create_react_index_file
    data =  args.map do |arg|
                field = arg.split(":")[0]
                type = arg.split(":")[1]
                
                "<p>{#{plural_name.singularize}.#{field}}</p>"
              end
    # CREATE INDEX PAGE
    create_file "app/javascript/components/#{plural_name}/#{plural_name.capitalize}.jsx", <<-FILE
import React, { useEffect, useState } from "react";
const #{plural_name.capitalize} = () => {
  const [#{plural_name}, set#{plural_name.capitalize}] = useState();

  useEffect(() => {
    fetch("/#{plural_name}.json").then(data => data.json()).then((data) => set#{plural_name.capitalize}(data));
  }, []);
  return (
    <>
      <h1>#{plural_name.capitalize}</h1>
      {#{plural_name} && (
        <div>
          {#{plural_name}.map((#{plural_name.singularize}) => {
            return (
              <div style={{ display: "flex" }}>
                #{args.map do |arg| "<p>{#{plural_name.singularize}.#{arg.split(":")[0]}}</p>\n                " end.join('')}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default #{plural_name.capitalize};
    FILE
  end


  def create_react_show_file
    data =  args.map {|arg| field = arg.split(":")[0]; type = arg.split(":")[1]; "<p>{#{plural_name.singularize.singularize}.#{field}}</p>"}
    # CREATE SHOW PAGE
    create_file "app/javascript/components/#{plural_name}/#{plural_name.singularize.capitalize}.jsx", <<-FILE
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
const #{plural_name.singularize.capitalize} = () => {
  const { #{plural_name.singularize}Id } = useParams();
  const [#{plural_name.singularize}, set#{plural_name.singularize.capitalize}] = useState();

  useEffect(() => {
    fetch(`/#{plural_name}/${#{plural_name.singularize}Id}.json`).then(data => data.json()).then((data) => set#{plural_name.singularize.capitalize}(data));
  }, []);
  return (
    <>
      <h1>#{plural_name.singularize.capitalize}</h1>
      {#{plural_name.singularize} && (
        <div>
          <div style={{ display: "flex" }}>
            #{args.map do |arg| "<p>{#{plural_name.singularize}.#{arg.split(":")[0]}}</p>\n            " end.join('')}
          </div>
        </div>
      )}
    </>
  );
};

export default #{plural_name.singularize.capitalize};
    FILE
  end
  

  def create_react_new_file
    fields =  args.map do |arg|
                field = arg.split(":")[0]
                type = arg.split(":")[1]
                
                "<label for='#{field}'>#{field.capitalize}</label>\n        <input name='#{field}' placeholder='#{field.capitalize}' type='text' onChange={(e) => handleChange(e)} />\n        "
              end
    

   
  # CREATE NEW PAGE
  create_file "app/javascript/components/#{plural_name}/New#{class_name}.jsx", <<-FILE
import React, { useState } from "react";

const New#{class_name} = () => {
  const [#{plural_name.singularize}, set#{class_name}] = useState({});

  return (
    <>
      <h1>New #{class_name}</h1>
      <form onSubmit={(e)=> handleSubmit(e)}>
        #{fields.join('')}
      </form>
    </>
  );

  function handleChange(e) {
    set#{class_name}({
      product: {
        ...#{plural_name.singularize}.#{plural_name.singularize},
        [e.target.name]: e.target.value,
      },
    });
  }

  function handleSubmit(e) {
    e.target.preventDefault();
    fetch("/#{plural_name}/create", {
      method: "POST",
      body: JSON.stringify(#{plural_name.singularize}),
    });
  }
};

export default New#{class_name};
    FILE
  end
  
end
