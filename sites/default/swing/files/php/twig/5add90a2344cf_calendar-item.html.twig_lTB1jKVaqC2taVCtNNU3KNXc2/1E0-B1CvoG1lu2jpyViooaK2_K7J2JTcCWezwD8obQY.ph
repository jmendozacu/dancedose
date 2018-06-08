<?php

/* modules/calendar/templates/calendar-item.html.twig */
class __TwigTemplate_2871d34f9bfc1cc0a5ddc11f5e460778c8ade9fe9a41099abad74214ac394798 extends Twig_Template
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
        $tags = array("for" => 42, "if" => 43);
        $filters = array("default" => 37, "calendar_stripe" => 40);
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('for', 'if'),
                array('default', 'calendar_stripe'),
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

        // line 37
        echo "<div class=\"";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (($this->getAttribute(($context["item"] ?? null), "class", array(), "any", true, true)) ? (_twig_default_filter($this->getAttribute(($context["item"] ?? null), "class", array()), "item")) : ("item")), "html", null, true));
        echo "\">
  <div class=\"view-item\">
    <div class=\"calendar ";
        // line 39
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["item"] ?? null), "granularity", array()), "html", null, true));
        echo "view\">
      ";
        // line 40
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\calendar\Template\TwigExtension')->getCalendarStripe(($context["item"] ?? null))));
        echo "
      <div class=\"";
        // line 41
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["item"] ?? null), "date_id", array()), "html", null, true));
        echo " contents\">
        ";
        // line 42
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(($context["rendered_fields"] ?? null));
        foreach ($context['_seq'] as $context["_key"] => $context["field"]) {
            // line 43
            echo "          ";
            if ((((($context["index"] ?? null) + 1) == 0) && $this->getAttribute(($context["item"] ?? null), "continuation", array()))) {
                // line 44
                echo "            <div class=\"continuation\">&laquo;</div>
          ";
            }
            // line 46
            echo "          ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable($context["field"]);
            foreach ($context['_seq'] as $context["_key"] => $context["field_html"]) {
                // line 47
                echo "            ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $context["field_html"], "html", null, true));
                echo "
          ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['field_html'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 49
            echo "        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['field'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 50
        echo "      </div>
      ";
        // line 51
        if ($this->getAttribute(($context["item"] ?? null), "continues", array())) {
            // line 52
            echo "        <div class=\"continues\">&raquo;</div>
      ";
        } else {
            // line 54
            echo "        <div class=\"cutoff\">&nbsp;</div>
      ";
        }
        // line 56
        echo "    </div>
  </div>
</div>
";
    }

    public function getTemplateName()
    {
        return "modules/calendar/templates/calendar-item.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  105 => 56,  101 => 54,  97 => 52,  95 => 51,  92 => 50,  86 => 49,  77 => 47,  72 => 46,  68 => 44,  65 => 43,  61 => 42,  57 => 41,  53 => 40,  49 => 39,  43 => 37,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "modules/calendar/templates/calendar-item.html.twig", "/home/mxubgpot/public_html/modules/calendar/templates/calendar-item.html.twig");
    }
}
