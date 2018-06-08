<?php

/* {# inline_template_start #} <h5  > {{ title }}  </h5> 
 <span    style=" color: black!important;">{{ field_event_styles }} </span>
<br>
 <span   style=" color: black!important;">{{ field_event_venue }} </span>
 */
class __TwigTemplate_d700c7f02005ea93de12d9b898dc28c0c5e6a19d4241b73edad46c5f501bcab1 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array();
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array(),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        echo " <h5  > ";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["title"] ?? null), "html", null, true));
        echo "  </h5> 
 <span    style=\" color: black!important;\">";
        // line 2
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["field_event_styles"] ?? null), "html", null, true));
        echo " </span>
<br>
 <span   style=\" color: black!important;\">";
        // line 4
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["field_event_venue"] ?? null), "html", null, true));
        echo " </span>
";
    }

    public function getTemplateName()
    {
        return "{# inline_template_start #} <h5  > {{ title }}  </h5> 
 <span    style=\" color: black!important;\">{{ field_event_styles }} </span>
<br>
 <span   style=\" color: black!important;\">{{ field_event_venue }} </span>
";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  57 => 4,  52 => 2,  47 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "{# inline_template_start #} <h5  > {{ title }}  </h5> 
 <span    style=\" color: black!important;\">{{ field_event_styles }} </span>
<br>
 <span   style=\" color: black!important;\">{{ field_event_venue }} </span>
", "");
    }
}
