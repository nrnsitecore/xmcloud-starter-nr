import React, { JSX } from 'react'
import { Field, Text, withDatasourceCheck, RichText } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import IconRenderer from '@/helpers/IconRenderer';

export type ToolsSelectorProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    SelectedTools: [{
      fields: {
        Title: Field<string>;
        Content: Field<string>;
        Icon: {
          fields: {
            displayName: string;
          }
        }
      }
    }]
  }
};

const ToolsSelector = (props: ToolsSelectorProps): JSX.Element => {
  const sxaStyles = `${props.params?.styles || ''}`;

  return (
    <section className={`py-16 bg-gray-50 ${sxaStyles}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12"><Text field={props.fields.Title} /></h2>
        <div className="grid md:grid-cols-4 gap-6">
          {props.fields.SelectedTools?.map((tool, index) => {
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <IconRenderer iconName={tool.fields.Icon.fields.displayName} />
                  <CardTitle><Text field={tool.fields.Title} /></CardTitle>
                </CardHeader>
                <CardContent>
                  <RichText field={tool.fields.Content} />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export const Default = withDatasourceCheck()<ToolsSelectorProps>(ToolsSelector);

