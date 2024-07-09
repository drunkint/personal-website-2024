import markdownStyles from './markdown-styles.module.css'
import DateFormatter from "./date-formatter";

export default function PostBody({ content }) {
  return (
    <div className="max-w-4xl px-4 mx-auto font-Header text-gray-300 tracking-wider pb-24">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
