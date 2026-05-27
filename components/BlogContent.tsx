import { MDXRemote } from 'next-mdx-remote/rsc'

interface BlogContentProps {
  content: string
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="
      prose prose-neutral max-w-none
      prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight
      prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
      prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
      prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
      prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:transition-colors
      prose-strong:text-foreground
      prose-ul:text-muted-foreground prose-ul:text-lg prose-ul:space-y-2
      prose-ol:text-muted-foreground prose-ol:text-lg prose-ol:space-y-2
      prose-li:leading-relaxed
      prose-blockquote:border-l-primary prose-blockquote:bg-muted prose-blockquote:rounded-r-xl prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:text-muted-foreground prose-blockquote:not-italic
      prose-code:text-primary prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
      prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-xl
      prose-img:rounded-2xl prose-img:border prose-img:border-border
      prose-hr:border-border
    ">
      <MDXRemote source={content} />
    </div>
  )
}
